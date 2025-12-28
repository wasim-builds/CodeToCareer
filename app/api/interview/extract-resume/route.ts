import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const resumeFile = formData.get('resume') as File;

        if (!resumeFile) {
            return NextResponse.json(
                { error: 'No resume file provided' },
                { status: 400 }
            );
        }

        // Extract text from resume
        const text = await resumeFile.text();

        console.log('[Extract Resume] Processed resume:', resumeFile.name);

        return NextResponse.json({
            text,
            filename: resumeFile.name,
            size: resumeFile.size,
        });

    } catch (error: any) {
        console.error('[Extract Resume] Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to extract resume text' },
            { status: 500 }
        );
    }
}
