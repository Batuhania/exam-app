import React, { useState, useEffect } from 'react';
import { User, Moon, Sun, ChevronDown, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { useTheme } from '../contexts/ThemeContext';
import { useQuizStore } from '../stores/quizStore';

const POSITIONS = [
    'Genel',
    'Müfettiş Yardımcısı',
    'Uzman Yardımcısı',
    'Memur',
    'Gişe / Servis Yetkilisi',
    'BT Uzmanı',
    'Kontrolör Yardımcısı',
];

const Profile: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const [position, setPosition] = useState(() => localStorage.getItem('selectedPosition') || 'Genel');
    const [showPositionPicker, setShowPositionPicker] = useState(false);
    const resetAllProgress = useQuizStore(s => s.resetAllProgress);
    const { totalSolved, totalCorrect, streakDays } = useQuizStore();

    useEffect(() => {
        localStorage.setItem('selectedPosition', position);
    }, [position]);

    const handleReset = () => {
        if (confirm("Tüm ilerlemeniz sıfırlanacak. Emin misiniz?")) {
            resetAllProgress();
            localStorage.removeItem('selectedPosition');
            window.location.reload();
        }
    };

    const successRate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

    return (
        <div className="space-y-6 pb-24">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profil</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hesap ayarları ve tercihler</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-200 dark:border-emerald-700 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Aday Öğrenci</h3>

                {/* Position Selector */}
                <button
                    onClick={() => setShowPositionPicker(!showPositionPicker)}
                    className="mt-1 flex items-center space-x-1 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
                >
                    <span>{position}</span>
                    <ChevronDown className={clsx("w-4 h-4 transition-transform", showPositionPicker && "rotate-180")} />
                </button>

                {showPositionPicker && (
                    <div className="mt-3 w-full space-y-1">
                        {POSITIONS.map(pos => (
                            <button
                                key={pos}
                                onClick={() => { setPosition(pos); setShowPositionPicker(false); }}
                                className={clsx(
                                    "w-full px-3 py-2 rounded-lg text-sm text-left transition",
                                    position === pos
                                        ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                                )}
                            >
                                {pos}
                            </button>
                        ))}
                    </div>
                )}

                {/* Quick Stats */}
                <div className="mt-4 flex items-center space-x-4 text-xs">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium">
                        {totalSolved} soru çözüldü
                    </span>
                    {streakDays > 0 && (
                        <span className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium">
                            🔥 {streakDays} gün
                        </span>
                    )}
                    {totalSolved > 0 && (
                        <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                            %{successRate} başarı
                        </span>
                    )}
                </div>
            </div>

            {/* Settings */}
            <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">Uygulama Ayarları</h3>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-700">
                    <button
                        onClick={toggleTheme}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                {isDark ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Gece Modu</span>
                        </div>
                        <div className={clsx("w-10 h-6 rounded-full relative transition-colors", isDark ? "bg-emerald-500" : "bg-gray-300")}>
                            <div className={clsx("absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all", isDark ? "left-5" : "left-1")}></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Account Actions */}
            <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">Hesap</h3>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-700">
                    <button
                        onClick={handleReset}
                        className="w-full p-4 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-900/20 transition group"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/40 transition">
                                <Info className="w-4 h-4 text-red-500 dark:text-red-400" />
                            </div>
                            <span className="text-red-500 dark:text-red-400 text-sm font-medium">İlerlemeyi Sıfırla</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* App Info */}
            <div className="text-center space-y-1 mt-8">
                <p className="text-[10px] text-gray-400 dark:text-gray-600">ExamMaster v2.0.0</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-600">© 2026 Batuhania</p>
            </div>
        </div>
    );
};

export default Profile;
