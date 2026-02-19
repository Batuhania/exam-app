import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-16 text-center">
            <div className="w-24 h-24 rounded-full bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-200 dark:border-amber-700 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-amber-500 dark:text-amber-400" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sayfa Bulunamadı</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                </p>
            </div>
            <Link
                to="/"
                className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition active:scale-95"
            >
                <Home className="w-4 h-4" />
                <span>Ana Sayfaya Dön</span>
            </Link>
        </div>
    );
};

export default NotFound;
