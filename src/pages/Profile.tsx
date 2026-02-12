import React, { useState } from 'react';
import { User, Settings, Moon, Sun, Bell } from 'lucide-react';
import { clsx } from 'clsx';

const Profile: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);

    const handleReset = () => {
        if (confirm("Tüm ilerlemeniz sıfırlanacak. Emin misiniz?")) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <div className="space-y-6 pb-24">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-white">Profil</h2>
                <p className="text-xs text-slate-400">Hesap ayarları ve tercihler</p>
            </div>

            {/* Profile Card */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                        <User className="w-10 h-10 text-slate-400" />
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white">Aday Öğrenci</h3>
                <p className="text-sm text-sky-400">Müfettiş Yardımcısı Adayı</p>
                <div className="mt-4 flex space-x-2">
                    <span className="px-3 py-1 rounded-full bg-slate-700 text-xs text-slate-300 font-medium">Başlangıç Seviyesi</span>
                </div>
            </div>

            {/* Settings Sections */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Uygulama Ayarları</h3>

                {/* Theme Toggle */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                                {isDarkMode ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
                            </div>
                            <span className="text-slate-200 text-sm font-medium">Gece Modu</span>
                        </div>
                        <div className={clsx("w-10 h-6 rounded-full relative transition-colors", isDarkMode ? "bg-indigo-600" : "bg-slate-600")}>
                            <div className={clsx("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", isDarkMode ? "left-5" : "left-1")}></div>
                        </div>
                    </button>

                    <div className="h-px bg-slate-700/50 mx-4"></div>

                    {/* Notifications */}
                    <button
                        onClick={() => setNotifications(!notifications)}
                        className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                                <Bell className="w-4 h-4 text-pink-400" />
                            </div>
                            <span className="text-slate-200 text-sm font-medium">Bildirimler</span>
                        </div>
                        <div className={clsx("w-10 h-6 rounded-full relative transition-colors", notifications ? "bg-emerald-500" : "bg-slate-600")}>
                            <div className={clsx("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", notifications ? "left-5" : "left-1")}></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Account Actions */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Hesap</h3>

                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
                    <button
                        onClick={handleReset}
                        className="w-full p-4 flex items-center justify-between hover:bg-rose-500/10 transition group"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition">
                                <Settings className="w-4 h-4 text-rose-400" />
                            </div>
                            <span className="text-rose-400 text-sm font-medium">İlerlemeyi Sıfırla</span>
                        </div>
                    </button>
                </div>
            </div>

            <p className="text-center text-[10px] text-slate-600 mt-8">
                ExamMaster v1.0.0
            </p>
        </div>
    );
};

export default Profile;
