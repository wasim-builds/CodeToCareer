"use client";

import { useState, useRef, useEffect, MouseEvent } from 'react';

interface ResizablePanelsProps {
    leftPanel: React.ReactNode;
    rightPanel: React.ReactNode;
    defaultLeftWidth?: number; // percentage
    minLeftWidth?: number; // percentage
    maxLeftWidth?: number; // percentage
}

export function ResizablePanels({
    leftPanel,
    rightPanel,
    defaultLeftWidth = 50,
    minLeftWidth = 30,
    maxLeftWidth = 70,
}: ResizablePanelsProps) {
    const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load saved width from localStorage
        const saved = localStorage.getItem('practice-split-width');
        if (saved) {
            const width = parseInt(saved, 10);
            if (width >= minLeftWidth && width <= maxLeftWidth) {
                setLeftWidth(width);
            }
        }
    }, [minLeftWidth, maxLeftWidth]);

    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            if (!isResizing || !containerRef.current) return;

            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

            if (newLeftWidth >= minLeftWidth && newLeftWidth <= maxLeftWidth) {
                setLeftWidth(newLeftWidth);
                localStorage.setItem('practice-split-width', newLeftWidth.toString());
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };
    }, [isResizing, minLeftWidth, maxLeftWidth]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsResizing(true);
    };

    return (
        <div ref={containerRef} className="flex flex-1 overflow-hidden relative">
            {/* Left Panel */}
            <div
                style={{ width: `${leftWidth}%` }}
                className="overflow-hidden"
            >
                {leftPanel}
            </div>

            {/* Resize Handle */}
            <div
                onMouseDown={handleMouseDown}
                className={`w-1 bg-gray-800 hover:bg-green-500 transition-colors cursor-col-resize relative group flex-shrink-0 ${isResizing ? 'bg-green-500' : ''
                    }`}
            >
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Wider hit area for easier grabbing */}
                <div className="absolute inset-y-0 -left-2 -right-2" />
            </div>

            {/* Right Panel */}
            <div
                style={{ width: `${100 - leftWidth}%` }}
                className="overflow-hidden"
            >
                {rightPanel}
            </div>
        </div>
    );
}
