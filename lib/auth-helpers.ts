import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const AUTH_COOKIE_NAME = 'auth-token';
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

/**
 * Set authentication cookie
 */
export function setAuthCookie(token: string): void {
    cookies().set(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
    });
}

/**
 * Get authentication token from cookies
 */
export function getAuthToken(): string | undefined {
    return cookies().get(AUTH_COOKIE_NAME)?.value;
}

/**
 * Clear authentication cookie
 */
export function clearAuthCookie(): void {
    cookies().set(AUTH_COOKIE_NAME, '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
        path: '/',
    });
}

/**
 * Create a response with auth cookie set
 */
export function createAuthResponse(data: any, token: string, status: number = 200): NextResponse {
    const response = NextResponse.json(data, { status });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
    });

    return response;
}

/**
 * Create a response with auth cookie cleared
 */
export function createLogoutResponse(data: any = { success: true }): NextResponse {
    const response = NextResponse.json(data);

    response.cookies.set(AUTH_COOKIE_NAME, '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
        path: '/',
    });

    return response;
}
