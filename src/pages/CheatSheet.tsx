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
        <div className="min-h-screen bg-slate-950 p-4 md:p-8 pb-24">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Özet Bilgi & Formüller
                    </h1>
                    <p className="text-xs text-slate-500">Sınav öncesi hızlı tekrar notları</p>
                </div>
                <div className="w-10"></div> {/* Spacer for alignment */}
            </header>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-500" />
                </div>
                <input
                    type="text"
                    placeholder="Konu, formül veya terim ara..."
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition shadow-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Content Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSheets.map((section) => (
                    <div key={section.id} className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition group">
                        {/* Section Header */}
                        <div className="bg-slate-800/50 p-4 flex items-center justify-between border-b border-slate-800">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <BookOpen className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h3 className="font-bold text-slate-200">{section.title}</h3>
                            </div>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-950 px-2 py-1 rounded">
                                {section.category}
                            </span>
                        </div>

                        {/* Items List */}
                        <div className="p-4 space-y-4">
                            {section.items.map((item, idx) => (
                                <div key={idx} className={`relative p-3 rounded-xl border ${item.highlight ? 'bg-emerald-900/10 border-emerald-500/30' : 'bg-slate-950/50 border-slate-800/50'}`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-sm font-semibold ${item.highlight ? 'text-emerald-300' : 'text-slate-300'}`}>
                                            {item.title}
                                        </h4>
                                        {item.highlight && <Bookmark className="w-3 h-3 text-emerald-500" />}
                                    </div>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        {/* Simple markdown bold parsing for **text** */}
                                        {item.content.split(/(\*\*.*?\*\*)/g).map((part: string, i: number) =>
                                            part.startsWith('**') && part.endsWith('**') ?
                                                <strong key={i} className="text-slate-200 font-bold">{part.slice(2, -2)}</strong> :
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
                    <p className="text-slate-500">Aradığınız kriterlere uygun sonuç bulunamadı.</p>
                </div>
            )}
        </div>
    );
};

export default CheatSheet;
