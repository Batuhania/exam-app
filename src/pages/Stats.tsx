import React from 'react';
import { topics } from '../data/questions';
import { Activity, TrendingUp, BookOpen, CheckCircle2, XCircle, Flame } from 'lucide-react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { useQuizStore } from '../stores/quizStore';

const Stats: React.FC = () => {
    const { totalCorrect, totalWrong, totalSolved, topicProgress, streakDays, quizHistory } = useQuizStore();

    const successRate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

    // Group topics by category and calculate stats from store
    const categories = topics.reduce((acc, topic) => {
        if (!acc[topic.category]) acc[topic.category] = [];
        acc[topic.category].push(topic);
        return acc;
    }, {} as Record<string, typeof topics>);

    // Recent quiz history (last 5)
    const recentQuizzes = [...quizHistory].reverse().slice(0, 5);

    return (
        <div className="space-y-6 pb-20">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">İstatistikler</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Performans analizi ve durum özeti</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Genel Başarı</p>
                        <div className="flex items-end space-x-2">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white">%{successRate}</span>
                            <span className={clsx("text-sm font-medium mb-1", successRate >= 50 ? "text-emerald-600 dark:text-emerald-400" : totalSolved === 0 ? "text-gray-400 dark:text-gray-500" : "text-red-500 dark:text-red-400")}>
                                {totalSolved === 0 ? "Henüz Çözülmedi" : successRate >= 70 ? "Çok İyi" : successRate >= 50 ? "İyi" : "Geliştirilmeli"}
                            </span>
                        </div>
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Activity className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-3 text-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{totalCorrect}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Doğru</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-3 text-center">
                        <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{totalWrong}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Yanlış</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-3 text-center">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{totalSolved}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Çözülen</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-3 text-center">
                        <Flame className="w-5 h-5 text-orange-500 dark:text-orange-400 mx-auto mb-1" />
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{streakDays}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Gün Seri</p>
                    </div>
                </div>
            </div>

            {/* Recent Quiz History */}
            {recentQuizzes.length > 0 && (
                <div className="space-y-3">
                    <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">Son Çözülen Testler</h3>
                    {recentQuizzes.map((quiz, idx) => {
                        const topic = topics.find(t => t.id === quiz.topicId);
                        const qRate = quiz.total > 0 ? Math.round((quiz.correct / quiz.total) * 100) : 0;
                        return (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                        {quiz.topicId === 0 ? "Hızlı Test" : quiz.topicId === 9999 ? "Deneme Sınavı" : topic?.name || "Bilinmeyen"}
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{quiz.date}</p>
                                </div>
                                <div className="flex items-center space-x-3 ml-3">
                                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{quiz.correct}D</span>
                                    <span className="text-xs text-red-500 dark:text-red-400 font-medium">{quiz.wrong}Y</span>
                                    <span className={clsx("text-xs font-bold px-2 py-0.5 rounded-full",
                                        qRate >= 70 ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                            : qRate >= 40 ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                                                : "bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400"
                                    )}>%{qRate}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Category Stats */}
            <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ml-1">Konu Bazlı Başarı</h3>

                {Object.entries(categories).map(([category, catTopics]) => {
                    const catCorrect = catTopics.reduce((acc, t) => acc + (topicProgress[t.id]?.correctCount || 0), 0);
                    const catWrong = catTopics.reduce((acc, t) => acc + (topicProgress[t.id]?.wrongCount || 0), 0);
                    const catTotal = catCorrect + catWrong;
                    const catRate = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0;

                    return (
                        <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium text-gray-800 dark:text-gray-200">{category}</h4>
                                <span className={clsx("text-xs font-bold px-2 py-0.5 rounded-full",
                                    catTotal === 0 ? "bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                                        : catRate >= 70 ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                            : catRate >= 40 ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                                                : "bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400"
                                )}>
                                    {catTotal === 0 ? "—" : `%${catRate}`}
                                </span>
                            </div>

                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex">
                                {catTotal > 0 && (
                                    <>
                                        <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${catRate}%` }}></div>
                                        <div className="h-full bg-red-400 transition-all duration-500" style={{ width: `${100 - catRate}%` }}></div>
                                    </>
                                )}
                            </div>

                            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                                <span>{catCorrect} Doğru</span>
                                <span>{catWrong} Yanlış</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Link to="/courses" className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-2">
                    <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Konu Çalış</span>
                </Link>
                <Link to="/quick-test" className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-2">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Netlerini Artır</span>
                </Link>
            </div>
        </div>
    );
};

export default Stats;
