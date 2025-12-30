import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST /api/theory/progress - Update theory progress
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { topicId, sectionId, completed } = body;

        if (!topicId || !sectionId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const progress = await prisma.theoryProgress.upsert({
            where: {
                userId_topicId_sectionId: {
                    userId: session.user.id,
                    topicId,
                    sectionId,
                },
            },
            update: {
                completed: completed !== undefined ? completed : true,
                lastStudied: new Date(),
            },
            create: {
                userId: session.user.id,
                topicId,
                sectionId,
                completed: completed !== undefined ? completed : true,
            },
        });

        // Award XP for completing a section
        if (completed) {
            await prisma.user.update({
                where: { id: session.user.id },
                data: {
                    xp: { increment: 25 }, // 25 XP for completing a theory section
                    lastActive: new Date(),
                },
            });
        }

        return NextResponse.json({ progress });
    } catch (error) {
        console.error("Update theory progress error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}

// GET /api/theory/progress - Get theory progress
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const topicId = searchParams.get("topicId");

        const progress = await prisma.theoryProgress.findMany({
            where: {
                userId: session.user.id,
                ...(topicId && { topicId }),
            },
        });

        return NextResponse.json({ progress });
    } catch (error) {
        console.error("Get theory progress error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
