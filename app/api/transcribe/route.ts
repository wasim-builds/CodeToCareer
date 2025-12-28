import { NextRequest, NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
    try {
        // Check if Groq is available
        if (!groq) {
            return NextResponse.json(
                { error: 'Groq API is not configured. Please add GROQ_API_KEY to your .env.local file.' },
                { status: 503 }
            );
        }

        // Parse form data
        const formData = await req.formData();
        const audioFile = formData.get('file') as File;
        const language = formData.get('language') as string | null;
        const prompt = formData.get('prompt') as string | null;

        if (!audioFile) {
            return NextResponse.json(
                { error: 'No audio file provided' },
                { status: 400 }
            );
        }

        console.log('[Transcribe API] Received file:', audioFile.name, 'Size:', audioFile.size);

        // Validate file size (25MB limit for Groq)
        const maxSize = 25 * 1024 * 1024; // 25MB
        if (audioFile.size > maxSize) {
            return NextResponse.json(
                { error: `File too large. Maximum size is 25MB, received ${(audioFile.size / 1024 / 1024).toFixed(2)}MB` },
                { status: 413 }
            );
        }

        // Convert File to Buffer for Groq API
        const bytes = await audioFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create temporary file (Groq API requires file path)
        const tempDir = path.join(process.cwd(), 'tmp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        const tempFilePath = path.join(tempDir, `audio_${Date.now()}.webm`);
        await writeFile(tempFilePath, buffer);

        try {
            // Call Groq Whisper API
            const transcription = await groq.audio.transcriptions.create({
                file: fs.createReadStream(tempFilePath) as any,
                model: 'whisper-large-v3',
                language: language || 'en',
                prompt: prompt || undefined,
                response_format: 'json',
                temperature: 0.0,
            });

            console.log('[Transcribe API] Transcription successful');

            // Clean up temp file
            fs.unlinkSync(tempFilePath);

            return NextResponse.json({
                transcript: transcription.text,
                language: language || 'en',
            });

        } catch (groqError: any) {
            // Clean up temp file on error
            if (fs.existsSync(tempFilePath)) {
                fs.unlinkSync(tempFilePath);
            }

            console.error('[Transcribe API] Groq error:', groqError);

            // Handle specific Groq errors
            if (groqError.message?.includes('rate limit')) {
                return NextResponse.json(
                    { error: 'Rate limit exceeded. Please try again in a moment.' },
                    { status: 429 }
                );
            }

            if (groqError.message?.includes('API key')) {
                return NextResponse.json(
                    { error: 'Invalid API key. Please check your Groq configuration.' },
                    { status: 401 }
                );
            }

            throw groqError;
        }

    } catch (error: any) {
        console.error('[Transcribe API] Error:', error);

        return NextResponse.json(
            {
                error: error.message || 'Failed to transcribe audio',
                details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 }
        );
    }
}

// OPTIONS for checking availability
export async function OPTIONS() {
    return NextResponse.json({ available: !!groq });
}
