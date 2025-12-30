import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST /api/quiz/session - Save quiz session
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const {
            topicId,
            difficulty,
            mode,
            timerMode,
            score,
            totalQuestions,
            correctAnswers,
            timeSpent,
            xpEarned,
            answers,
        } = body;

        // Validate required fields
        if (!topicId || !difficulty || !mode || score === undefined) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Save quiz session
        const quizSession = await prisma.quizSession.create({
            data: {
                userId: session.user.id,
                topicId,
                difficulty,
                mode,
                timerMode,
                score,
                totalQuestions,
                correctAnswers,
                timeSpent,
                xpEarned,
                answers,
            },
        });

        // Award XP to user
        await prisma.user.update({
            where: { id: session.user.id },
            data: {
                xp: { increment: xpEarned },
                lastActive: new Date(),
            },
        });

        return NextResponse.json({ session: quizSession }, { status: 201 });
    } catch (error) {
        console.error("Save quiz session error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}

// GET /api/quiz/session - Get quiz history
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const topicId = searchParams.get("topicId");
        const limit = parseInt(searchParams.get("limit") || "10");

        const sessions = await prisma.quizSession.findMany({
            where: {
                userId: session.user.id,
                ...(topicId && { topicId }),
            },
            orderBy: {
                completedAt: "desc",
            },
            take: limit,
        });

        return NextResponse.json({ sessions });
    } catch (error) {
        console.error("Get quiz history error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
