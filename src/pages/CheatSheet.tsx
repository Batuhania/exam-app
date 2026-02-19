import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, Bookmark, BookOpen } from 'lucide-react';
import { cheatSheets, CheatSheetSection } from '../data/cheatSheets';

const CheatSheet: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSheets = cheatSheets.map(section => {
        const matchingItems = section.items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (section.title.toLowerCase().includes(searchTerm.toLowerCase()) || matchingItems.length > 0) {
            return {
                ...section,
                items: matchingItems.length > 0 ? matchingItems : section.items
            };
        }
        return null;
    }).filter((s): s is CheatSheetSection => s !== null);

    return (
        <div className="min-h-screen p-4 md:p-8 pb-24">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Özet Bilgi & Formüller
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Sınav öncesi hızlı tekrar notları</p>
                </div>
                <div className="w-10"></div>
            </header>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                    type="text"
                    placeholder="Konu, formül veya terim ara..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Content Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSheets.map((section) => (
                    <div key={section.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition">
                        {/* Section Header */}
                        <div className="bg-gray-50 dark:bg-gray-750 p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200">{section.title}</h3>
                            </div>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                {section.category}
                            </span>
                        </div>

                        {/* Items List */}
                        <div className="p-4 space-y-3">
                            {section.items.map((item, idx) => (
                                <div key={idx} className={`relative p-3 rounded-lg border ${item.highlight
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700'
                                    : 'bg-gray-50 dark:bg-gray-700/50 border-gray-100 dark:border-gray-600'}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-sm font-semibold ${item.highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                            {item.title}
                                        </h4>
                                        {item.highlight && <Bookmark className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />}
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {item.content.split(/(\*\*.*?\*\*)/g).map((part: string, i: number) =>
                                            part.startsWith('**') && part.endsWith('**') ?
                                                <strong key={i} className="text-gray-700 dark:text-gray-200 font-bold">{part.slice(2, -2)}</strong> :
                                                part
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredSheets.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400 dark:text-gray-500">Aradığınız kriterlere uygun sonuç bulunamadı.</p>
                </div>
            )}
        </div>
    );
};

export default CheatSheet;
