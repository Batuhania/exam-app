import React, { useState } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { interviewQuestions } from '../data/interviews';
import { clsx } from 'clsx';

const InterviewPrep: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Tümü");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const categories = ["Tümü", "Kişisel", "Teknik", "Durumsal", "Kurumsal"];

    const filteredQuestions = activeCategory === "Tümü"
        ? interviewQuestions
        : interviewQuestions.filter(q => q.category === activeCategory);

    return (
        <div className="space-y-6 pb-20">
            <div className="flex items-center space-x-4">
                <Link to="/" className="p-2 rounded-lg hover:bg-slate-800 transition">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">Mülakat Hazırlık</h2>
                    <p className="text-xs text-slate-400">Çıkmış sorular ve cevap ipuçları</p>
                </div>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={clsx(
                            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition",
                            activeCategory === cat
                                ? "bg-sky-500 text-white"
                                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredQuestions.map((item) => (
                    <div
                        key={item.id}
                        className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                            className="w-full text-left p-4 flex items-start justify-between"
                        >
                            <div className="flex-1 pr-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className={clsx(
                                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1",
                                        item.category === "Kişisel" ? "bg-purple-500/10 text-purple-400" :
                                            item.category === "Teknik" ? "bg-blue-500/10 text-blue-400" :
                                                item.category === "Durumsal" ? "bg-orange-500/10 text-orange-400" :
                                                    "bg-emerald-500/10 text-emerald-400"
                                    )}>
                                        <span>{item.category}</span>
                                    </span>
                                    {item.frequency === "Yüksek" && (
                                        <span className="text-[10px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full">
                                            Sık Sorulur
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-medium text-slate-200">{item.question}</h3>
                            </div>
                            <div className={clsx("transition-transform duration-300", expandedId === item.id ? "rotate-180" : "")}>
                                <ChevronDown className="w-5 h-5 text-slate-500" />
                            </div>
                        </button>

                        {expandedId === item.id && (
                            <div className="px-4 pb-4 pt-0 animate-fadeIn">
                                <div className="border-t border-slate-700/50 my-2"></div>
                                <div className="space-y-3">
                                    <div className="bg-sky-500/5 border border-sky-500/10 rounded-lg p-3">
                                        <h4 className="text-xs font-bold text-sky-400 mb-1">💡 İpucu</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">{item.answerTip}</p>
                                    </div>
                                    {item.sampleAnswer && (
                                        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3">
                                            <h4 className="text-xs font-bold text-emerald-400 mb-1">✅ Örnek Cevap</h4>
                                            <p className="text-sm text-slate-300 leading-relaxed italic">"{item.sampleAnswer}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InterviewPrep;
