// Social media sharing utilities

export interface ShareData {
    title: string;
    text: string;
    url?: string;
}

/**
 * Share on Twitter
 */
export function shareOnTwitter(text: string, url?: string) {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.set('text', text);
    if (url) {
        twitterUrl.searchParams.set('url', url);
    }
    window.open(twitterUrl.toString(), '_blank', 'width=550,height=420');
}

/**
 * Share on Facebook
 */
export function shareOnFacebook(url: string) {
    const facebookUrl = new URL('https://www.facebook.com/sharer/sharer.php');
    facebookUrl.searchParams.set('u', url);
    window.open(facebookUrl.toString(), '_blank', 'width=550,height=420');
}

/**
 * Share on LinkedIn
 */
export function shareOnLinkedIn(url: string) {
    const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
    linkedInUrl.searchParams.set('url', url);
    window.open(linkedInUrl.toString(), '_blank', 'width=550,height=420');
}

/**
 * Share on WhatsApp
 */
export function shareOnWhatsApp(text: string) {
    const whatsappUrl = new URL('https://wa.me/');
    whatsappUrl.searchParams.set('text', text);
    window.open(whatsappUrl.toString(), '_blank');
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

/**
 * Use native Web Share API if available
 */
export async function nativeShare(data: ShareData): Promise<boolean> {
    if (navigator.share) {
        try {
            await navigator.share(data);
            return true;
        } catch (err) {
            // User cancelled or error occurred
            return false;
        }
    }
    return false;
}

/**
 * Check if native share is supported
 */
export function isNativeShareSupported(): boolean {
    return typeof navigator !== 'undefined' && !!navigator.share;
}
