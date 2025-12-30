import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendPasswordResetEmail, generateToken, getTokenExpiry } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Find user by email (don't reveal if user exists or not for security)
        const user = await prisma.user.findUnique({
            where: { email },
        });

        // Always return success to prevent email enumeration
        if (!user) {
            return NextResponse.json({
                success: true,
                message: 'If an account exists with this email, you will receive a password reset link.',
            });
        }

        // Generate reset token
        const token = generateToken();
        const tokenExpiry = getTokenExpiry();

        // Save token to database
        await prisma.user.update({
            where: { id: user.id },
            data: {
                verificationToken: token,
                tokenExpiry,
            },
        });

        // Send reset email
        await sendPasswordResetEmail(email, token);

        return NextResponse.json({
            success: true,
            message: 'If an account exists with this email, you will receive a password reset link.',
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}
