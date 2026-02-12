import React from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface CourseCardProps {
    title: string;
    topicCount: number;
    questionCount: number;
    progress: number;
    color?: 'primary' | 'secondary' | 'emerald' | 'rose';
    onClick?: () => void;
}

const colorMap = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    rose: 'bg-rose-100 text-rose-600',
};

const barColorMap = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    emerald: 'bg-emerald-500',
    rose: 'bg-rose-500',
};

const CourseCard: React.FC<CourseCardProps> = ({
    title,
    topicCount,
    questionCount,
    progress,
    color = 'primary',
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center transition-colors", colorMap[color])}>
                    <span className="font-bold text-xl">{title.charAt(0)}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
                    <ChevronRight />
                </div>
            </div>

            <h3 className="font-semibold text-xl text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{topicCount} Konu • {questionCount} Soru</p>

            <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                <div
                    className={clsx("h-2 rounded-full transition-all duration-500", barColorMap[color])}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
                <span>İlerleme</span>
                <span className="font-medium text-gray-700">%{progress}</span>
            </div>
        </div>
    );
};

export default CourseCard;
