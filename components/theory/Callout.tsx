'use client';

import { FiInfo, FiAlertTriangle, FiCheckCircle, FiZap } from 'react-icons/fi';

type CalloutType = 'info' | 'warning' | 'success' | 'tip';

interface CalloutProps {
    type: CalloutType;
    title?: string;
    children: React.ReactNode;
}

const calloutConfig = {
    info: {
        icon: FiInfo,
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        iconColor: 'text-blue-400',
        titleColor: 'text-blue-300',
    },
    warning: {
        icon: FiAlertTriangle,
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        iconColor: 'text-yellow-400',
        titleColor: 'text-yellow-300',
    },
    success: {
        icon: FiCheckCircle,
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
        iconColor: 'text-green-400',
        titleColor: 'text-green-300',
    },
    tip: {
        icon: FiZap,
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
        iconColor: 'text-purple-400',
        titleColor: 'text-purple-300',
    },
};

export function Callout({ type, title, children }: CalloutProps) {
    const config = calloutConfig[type];
    const Icon = config.icon;

    return (
        <div className={`my-4 rounded-lg border ${config.bgColor} ${config.borderColor} p-4`}>
            <div className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                    <Icon className={`w-5 h-5 ${config.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className={`font-semibold ${config.titleColor} mb-1.5`}>
                            {title}
                        </h4>
                    )}
                    <div className="text-gray-300 text-sm leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
