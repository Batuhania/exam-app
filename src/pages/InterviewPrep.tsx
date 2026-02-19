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
                <Link to="/" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <ChevronLeft className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </Link>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mülakat Hazırlık</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Çıkmış sorular ve cevap ipuçları</p>
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
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-3">
                {filteredQuestions.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                    >
                        <button
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                            className="w-full text-left p-4 flex items-start justify-between"
                        >
                            <div className="flex-1 pr-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className={clsx(
                                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                                        item.category === "Kişisel" ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                                            item.category === "Teknik" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                                                item.category === "Durumsal" ? "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                                                    "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                    )}>
                                        {item.category}
                                    </span>
                                    {item.frequency === "Yüksek" && (
                                        <span className="text-[10px] bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 px-2 py-0.5 rounded-full">
                                            Sık Sorulur
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">{item.question}</h3>
                            </div>
                            <div className={clsx("transition-transform duration-300", expandedId === item.id ? "rotate-180" : "")}>
                                <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                            </div>
                        </button>

                        {expandedId === item.id && (
                            <div className="px-4 pb-4 pt-0 animate-fadeIn">
                                <div className="border-t border-gray-100 dark:border-gray-700 my-2"></div>
                                <div className="space-y-3">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3">
                                        <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">💡 İpucu</h4>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.answerTip}</p>
                                    </div>
                                    {item.sampleAnswer && (
                                        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-lg p-3">
                                            <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">✅ Örnek Cevap</h4>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">"{item.sampleAnswer}"</p>
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
