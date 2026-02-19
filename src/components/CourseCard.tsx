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
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
    secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
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
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center transition-colors", colorMap[color])}>
                    <span className="font-bold text-xl">{title.charAt(0)}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 dark:text-gray-500">
                    <ChevronRight />
                </div>
            </div>

            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{topicCount} Konu • {questionCount} Soru</p>

            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                <div
                    className={clsx("h-2 rounded-full transition-all duration-500", barColorMap[color])}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>İlerleme</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">%{progress}</span>
            </div>
        </div>
    );
};

export default CourseCard;
