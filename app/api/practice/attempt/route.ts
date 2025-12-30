import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// POST /api/practice/attempt - Save practice attempt
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { problemId, language, code, passed, testResults, timeSpent } = body;

        if (!problemId || !language || !code) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const attempt = await prisma.practiceAttempt.create({
            data: {
                userId: session.user.id,
                problemId,
                language,
                code,
                passed: passed || false,
                testResults: testResults || {},
                timeSpent: timeSpent || 0,
            },
        });

        // Award XP if passed
        if (passed) {
            await prisma.user.update({
                where: { id: session.user.id },
                data: {
                    xp: { increment: 50 }, // 50 XP for solving a problem
                    lastActive: new Date(),
                },
            });
        }

        return NextResponse.json({ attempt }, { status: 201 });
    } catch (error) {
        console.error("Save practice attempt error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}

// GET /api/practice/attempt - Get practice attempts
export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const problemId = searchParams.get("problemId");

        const attempts = await prisma.practiceAttempt.findMany({
            where: {
                userId: session.user.id,
                ...(problemId && { problemId }),
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({ attempts });
    } catch (error) {
        console.error("Get practice attempts error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
