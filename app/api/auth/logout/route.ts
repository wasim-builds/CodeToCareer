import { NextRequest } from 'next/server';
import { createLogoutResponse } from '@/lib/auth-helpers';

export async function POST(request: NextRequest) {
    // Clear the auth cookie and return success
    return createLogoutResponse({ success: true, message: 'Logged out successfully' });
}
