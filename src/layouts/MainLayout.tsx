import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Zap, BarChart3, User } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
    { path: '/', icon: Home, label: 'Ana Sayfa' },
    { path: '/courses', icon: BookOpen, label: 'Dersler' },
    { path: '/quick-test', icon: Zap, label: 'Test' },
    { path: '/stats', icon: BarChart3, label: 'İstatistik' },
    { path: '/profile', icon: User, label: 'Profil' },
];

const MainLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden font-sans">
            {/* Top Bar */}
            <header className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10 sticky top-0"
                style={{ paddingTop: 'max(env(safe-area-inset-top), 0.75rem)' }}
            >
                <div>
                    <h1 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">ExamMaster</h1>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Banka Sınavlarına Hazırlık</p>
                </div>
                <Link to="/profile">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-400 dark:text-gray-300" />
                    </div>
                </Link>
            </header>

            {/* Content */}
            <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 pb-24">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
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
                                    <div className="w-14 h-14 rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/25 flex items-center justify-center border-4 border-white dark:border-gray-800 transition-transform active:scale-95">
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
                                    isActive ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                                )}
                            >
                                <Icon className="w-6 h-6 transition-colors" />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default MainLayout;
