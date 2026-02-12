import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, Briefcase } from 'lucide-react';
import { clsx } from 'clsx';

const PomodoroTimer: React.FC = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'work' | 'short' | 'long'>('work');

    const totalSeconds = mode === 'work' ? 25 * 60 : mode === 'short' ? 5 * 60 : 15 * 60;
    const currentSeconds = minutes * 60 + seconds;
    const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;

    // Circumference for SVG circle
    const radius = 120;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        setIsActive(false);
                        // Zamanlayıcı tamamlandı
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }
        return () => { if (interval) clearInterval(interval); };
    }, [isActive, seconds, minutes]);

    const switchMode = (newMode: 'work' | 'short' | 'long') => {
        setMode(newMode);
        setIsActive(false);
        setSeconds(0);
        if (newMode === 'work') setMinutes(25);
        else if (newMode === 'short') setMinutes(5);
        else setMinutes(15);
    };

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
        if (mode === 'work') setMinutes(25);
        else if (mode === 'short') setMinutes(5);
        else setMinutes(15);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-8">
            {/* Mode Switcher */}
            <div className="flex p-1 bg-slate-800 rounded-2xl">
                <button
                    onClick={() => switchMode('work')}
                    className={clsx("px-4 py-2 rounded-xl text-sm font-medium transition", mode === 'work' ? "bg-orange-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200")}
                >
                    <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>Çalışma</span>
                    </div>
                </button>
                <button
                    onClick={() => switchMode('short')}
                    className={clsx("px-4 py-2 rounded-xl text-sm font-medium transition", mode === 'short' ? "bg-emerald-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200")}
                >
                    <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4" />
                        <span>Kısa Mola</span>
                    </div>
                </button>
                <button
                    onClick={() => switchMode('long')}
                    className={clsx("px-4 py-2 rounded-xl text-sm font-medium transition", mode === 'long' ? "bg-blue-500 text-white shadow-lg" : "text-slate-400 hover:text-slate-200")}
                >
                    <span>Uzun Mola</span>
                </button>
            </div>

            {/* Timer Circle */}
            <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90 drop-shadow-2xl">
                    <circle
                        cx="160"
                        cy="160"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-slate-800"
                    />
                    <circle
                        cx="160"
                        cy="160"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className={clsx("transition-all duration-1000",
                            mode === 'work' ? "text-orange-500" : mode === 'short' ? "text-emerald-500" : "text-blue-500"
                        )}
                    />
                </svg>

                {/* Time Text */}
                <div className="text-center z-10">
                    <div className="text-7xl font-bold text-white tracking-widest font-mono">
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </div>
                    <p className="text-slate-400 mt-2 font-medium tracking-widest uppercase text-sm">
                        {isActive ? 'ODAKLAN' : 'DURAKLATILDI'}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6">
                <button
                    onClick={resetTimer}
                    className="p-4 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
                >
                    <RotateCcw className="w-6 h-6" />
                </button>

                <button
                    onClick={toggleTimer}
                    className={clsx(
                        "w-20 h-20 rounded-full flex items-center justify-center transition shadow-xl active:scale-95",
                        isActive ? "bg-slate-700 text-white" : "bg-white text-slate-900"
                    )}
                >
                    {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                </button>
            </div>
        </div>
    );
};

export default PomodoroTimer;
