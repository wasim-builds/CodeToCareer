import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST /api/user/xp - Award XP to user
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { xp } = body;

        if (!xp || xp <= 0) {
            return NextResponse.json({ error: "Invalid XP amount" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { xp: true, level: true },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const newXP = user.xp + xp;
        const newLevel = Math.floor(newXP / 1000) + 1; // Level up every 1000 XP

        const updatedUser = await prisma.user.update({
            where: { id: session.user.id },
            data: {
                xp: newXP,
                level: newLevel,
                lastActive: new Date(),
            },
            select: {
                id: true,
                xp: true,
                level: true,
            },
        });

        return NextResponse.json({
            user: updatedUser,
            leveledUp: newLevel > user.level,
        });
    } catch (error) {
        console.error("Award XP error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
