"use client";

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface SuccessConfettiProps {
    trigger: boolean;
}

export function SuccessConfetti({ trigger }: SuccessConfettiProps) {
    useEffect(() => {
        if (trigger) {
            // Fire confetti from both sides
            const duration = 2000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

            const randomInRange = (min: number, max: number) => {
                return Math.random() * (max - min) + min;
            };

            const interval: NodeJS.Timeout = setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // Left side
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    colors: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
                });

                // Right side
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    colors: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
                });
            }, 250);

            return () => clearInterval(interval);
        }
    }, [trigger]);

    return null;
}
