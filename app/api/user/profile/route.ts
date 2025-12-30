import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/user/profile - Get current user profile
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                xp: true,
                level: true,
                streak: true,
                lastActive: true,
                createdAt: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Get profile error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}

// PUT /api/user/profile - Update user profile
export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { name, image } = body;

        const user = await prisma.user.update({
            where: { id: session.user.id },
            data: {
                name: name || undefined,
                image: image || undefined,
                lastActive: new Date(),
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                xp: true,
                level: true,
                streak: true,
            },
        });

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Update profile error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
