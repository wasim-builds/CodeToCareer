import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.EMAIL_FROM || 'noreply@codetocareer.com';
const APP_URL = process.env.NEXTAUTH_URL || 'http://localhost:3001';

/**
 * Send email verification link to user
 */
export async function sendVerificationEmail(email: string, token: string) {
    const verificationUrl = `${APP_URL}/verify-email?token=${token}`;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'Verify your email - CodeToCareer',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to CodeToCareer!</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thanks for signing up! Please verify your email address to get started.</p>
                <p style="text-align: center;">
                  <a href="${verificationUrl}" class="button">Verify Email Address</a>
                </p>
                <p>Or copy and paste this link into your browser:</p>
                <p style="word-break: break-all; color: #667eea;">${verificationUrl}</p>
                <p>This link will expire in 24 hours.</p>
                <p>If you didn't create an account, you can safely ignore this email.</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} CodeToCareer. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to send verification email:', error);
        return { success: false, error };
    }
}

/**
 * Send password reset link to user
 */
export async function sendPasswordResetEmail(email: string, token: string) {
    const resetUrl = `${APP_URL}/reset-password?token=${token}`;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'Reset your password - CodeToCareer',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #ef4444; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Reset Your Password</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>We received a request to reset your password. Click the button below to create a new password:</p>
                <p style="text-align: center;">
                  <a href="${resetUrl}" class="button">Reset Password</a>
                </p>
                <p>Or copy and paste this link into your browser:</p>
                <p style="word-break: break-all; color: #667eea;">${resetUrl}</p>
                <p>This link will expire in 24 hours.</p>
                <p><strong>If you didn't request a password reset, please ignore this email.</strong> Your password will remain unchanged.</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} CodeToCareer. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
        });
        return { success: true };
    } catch (error) {
        console.error('Failed to send password reset email:', error);
        return { success: false, error };
    }
}

/**
 * Generate a secure random token
 */
export function generateToken(): string {
    return require('crypto').randomBytes(32).toString('hex');
}

/**
 * Get token expiry time (24 hours from now)
 */
export function getTokenExpiry(): Date {
    return new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
}
