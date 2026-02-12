import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, Zap, BarChart2 } from 'lucide-react';
import clsx from 'clsx';

const MainLayout: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Ana Sayfa', path: '/' },
        { icon: BookOpen, label: 'Dersler', path: '/courses' },
        { icon: Zap, label: 'Hızlı Test', path: '/quick-test' }, // Ortadaki vurgulu buton olabilir
        { icon: BarChart2, label: 'İstatistik', path: '/stats' },
        { icon: User, label: 'Profil', path: '/profile' },
    ];

    return (
        <div className="flex flex-col h-screen bg-slate-900 text-slate-50 overflow-hidden font-sans">
            {/* Top Bar */}
            <header className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-10 sticky top-0"
                style={{ paddingTop: 'max(env(safe-area-inset-top), 0.75rem)' }}
            >
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        ExamMaster
                    </h1>
                    <p className="text-xs text-slate-400">Müfettiş Yrd.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-400" />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto pb-24 px-3 sm:px-4 py-4 sm:py-6 scroll-smooth">
                <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto w-full">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-slate-800"
                style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
            >
                <div className="flex justify-around items-center h-16 max-w-md sm:max-w-lg mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        const isCenter = item.path === '/quick-test';

                        if (isCenter) {
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="relative -top-5"
                                >
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/30 flex items-center justify-center border-4 border-slate-900 transition-transform active:scale-95">
                                        <Zap className="w-7 h-7 text-white fill-current" />
                                    </div>
                                </Link>
                            )
                        }

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "flex flex-col items-center justify-center w-full h-full space-y-1",
                                    isActive ? "text-sky-400" : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                <Icon className={clsx("w-6 h-6 transition-colors", isActive && "fill-sky-400/20")} />
                                {/* <span className="text-[10px] font-medium">{item.label}</span>  Optional label */}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default MainLayout;
