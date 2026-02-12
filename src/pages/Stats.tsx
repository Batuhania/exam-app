import React from 'react';
import { topics } from '../data/questions';
import { Activity, TrendingUp, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

const Stats: React.FC = () => {
    // General Stats
    // const totalQuestions = sampleQuestions.length; // unused
    // const totalTopics = topics.length; // unused

    const totalSolved = topics.reduce((acc, t) => acc + t.solvedCount, 0);
    const totalCorrect = topics.reduce((acc, t) => acc + t.correctCount, 0);
    const totalWrong = topics.reduce((acc, t) => acc + t.wrongCount, 0);

    const successRate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

    // Categorize Topics
    const categories = topics.reduce((acc, topic) => {
        if (!acc[topic.category]) acc[topic.category] = [];
        acc[topic.category].push(topic);
        return acc;
    }, {} as Record<string, typeof topics>);

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-white">İstatistikler</h2>
                <p className="text-xs text-slate-400">Performans analizi ve durum özeti</p>
            </div>

            {/* Main Score Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-slate-400 text-sm mb-1">Genel Başarı</p>
                        <div className="flex items-end space-x-2">
                            <span className="text-4xl font-bold text-white">%{successRate}</span>
                            <span className={clsx("text-sm font-medium mb-1", successRate >= 50 ? "text-emerald-400" : "text-rose-400")}>
                                {successRate >= 50 ? "İyi Durumda" : "Geliştirilmeli"}
                            </span>
                        </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500/30 flex items-center justify-center relative">
                        <Activity className="w-8 h-8 text-indigo-400" />
                        {/* Simple circular progress visualization could go here */}
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{totalCorrect}</p>
                        <p className="text-[10px] text-slate-400">Doğru</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <XCircle className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{totalWrong}</p>
                        <p className="text-[10px] text-slate-400">Yanlış</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-white/5">
                        <BookOpen className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-white">{totalSolved}</p>
                        <p className="text-[10px] text-slate-400">Çözülen</p>
                    </div>
                </div>
            </div>

            {/* Category Performance */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Konu Bazlı Başarı</h3>

                {Object.entries(categories).map(([category, catTopics]) => {
                    const catCorrect = catTopics.reduce((acc, t) => acc + t.correctCount, 0);
                    const catWrong = catTopics.reduce((acc, t) => acc + t.wrongCount, 0);
                    const catTotal = catCorrect + catWrong;
                    const catRate = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0;

                    return (
                        <div key={category} className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium text-slate-200">{category}</h4>
                                <span className={clsx("text-xs font-bold px-2 py-0.5 rounded-full", catRate >= 70 ? "bg-emerald-500/20 text-emerald-400" : catRate >= 40 ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400")}>
                                    %{catRate} Başarı
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden flex">
                                <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${catRate}%` }}></div>
                                <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: `${100 - catRate}%` }}></div>
                            </div>

                            <div className="flex justify-between mt-2 text-xs text-slate-500">
                                <span>{catCorrect} Doğru</span>
                                <span>{catWrong} Yanlış</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
                <Link to="/courses" className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition flex flex-col items-center justify-center text-center space-y-2">
                    <BookOpen className="w-6 h-6 text-sky-400" />
                    <span className="text-sm font-medium text-slate-300">Konu Çalış</span>
                </Link>
                <Link to="/quick-test" className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition flex flex-col items-center justify-center text-center space-y-2">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <span className="text-sm font-medium text-slate-300">Netlerini Artır</span>
                </Link>
            </div>
        </div>
    );
};

export default Stats;
