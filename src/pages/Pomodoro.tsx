import React from 'react';
import PomodoroTimer from '../components/pomodoro/PomodoroTimer';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pomodoro: React.FC = () => {
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-4">
                <Link to="/" className="p-2 rounded-lg hover:bg-slate-800 transition">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">Pomodoro</h2>
                    <p className="text-xs text-slate-400">Zamanı yönet, başarını artır.</p>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <PomodoroTimer />
            </div>
        </div>
    );
};

export default Pomodoro;
