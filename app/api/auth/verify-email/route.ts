import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateToken } from '@/lib/jwt';
import { createAuthResponse } from '@/lib/auth-helpers';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json(
                { error: 'Verification token is required' },
                { status: 400 }
            );
        }

        // Find user with this verification token
        const user = await prisma.user.findUnique({
            where: { verificationToken: token },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid or expired verification token' },
                { status: 400 }
            );
        }

        // Check if token is expired
        if (user.tokenExpiry && user.tokenExpiry < new Date()) {
            return NextResponse.json(
                { error: 'Verification token has expired' },
                { status: 400 }
            );
        }

        // Mark email as verified and clear token
        await prisma.user.update({
            where: { id: user.id },
            data: {
                emailVerified: new Date(),
                verificationToken: null,
                tokenExpiry: null,
            },
        });

        // Generate JWT token for auto-login
        const jwtToken = generateToken({
            userId: user.id,
            email: user.email,
            name: user.name || undefined,
        });

        // Return success with auth cookie
        const { password: _, ...userWithoutPassword } = user;

        return createAuthResponse(
            {
                success: true,
                message: 'Email verified successfully',
                user: userWithoutPassword,
            },
            jwtToken
        );
    } catch (error) {
        console.error('Email verification error:', error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
}
