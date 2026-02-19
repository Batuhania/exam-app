import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Layers, Clock, FileText, ChevronRight, ClipboardList } from 'lucide-react';
import { topics, sampleQuestions } from '../data/questions';
import { useQuizStore } from '../stores/quizStore';

const Dashboard: React.FC = () => {
    const totalTopics = topics.length;
    const totalQuestions = sampleQuestions.length;

    const { totalCorrect, totalWrong, totalSolved, streakDays, topicProgress } = useQuizStore();

    // Count topics that have been attempted
    const solvedTopics = topics.filter(t => {
        const progress = topicProgress[t.id];
        return progress && progress.solvedCount > 0;
    }).length;

    const progress = totalTopics > 0 ? Math.round((solvedTopics / totalTopics) * 100) : 0;
    const successRate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

    const position = localStorage.getItem('selectedPosition') || 'Genel';

    return (
        <div className="space-y-6 pb-24">
            {/* Welcome */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Hoş Geldiniz</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bugün hedeflerine bir adım daha yaklaş.</p>
                <div className="flex items-center space-x-2 mt-1">
                    {position !== 'Genel' && (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">{position}</span>
                    )}
                    {streakDays > 0 && (
                        <span className="inline-block px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium">🔥 {streakDays} gün seri</span>
                    )}
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-3">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-center shadow-sm">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{solvedTopics}/{totalTopics}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Konu</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-center shadow-sm">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{totalQuestions}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Soru</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-center shadow-sm">
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{totalCorrect}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Doğru</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-center shadow-sm">
                    <p className="text-lg font-bold text-red-500 dark:text-red-400">{totalWrong}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Yanlış</p>
                </div>
            </div>

            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Genel İlerleme</span>
                    <div className="flex items-center space-x-3">
                        {totalSolved > 0 && (
                            <span className="text-xs text-gray-400 dark:text-gray-500">%{successRate} başarı</span>
                        )}
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{progress}%</span>
                    </div>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Study Tools */}
            <div>
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 ml-1">Çalışma Araçları</h3>
                <div className="grid grid-cols-2 gap-3">
                    <Link to="/courses" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
                            <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Konular</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{totalTopics} konu</p>
                    </Link>

                    <Link to="/quick-test" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Hızlı Test</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{totalQuestions} soru</p>
                    </Link>

                    <Link to="/cards" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
                            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Kartlar</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Hızlı tekrar</p>
                    </Link>

                    <Link to="/pomodoro" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center mb-3">
                            <Clock className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Pomodoro</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Odaklan</p>
                    </Link>
                </div>
            </div>

            {/* Mock Exam CTA */}
            <Link to="/mock-exam" className="block bg-emerald-600 hover:bg-emerald-700 rounded-xl p-4 shadow-sm transition-all active:scale-[0.98]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                            <ClipboardList className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Deneme Sınavı Başlat</h4>
                            <p className="text-xs text-emerald-100">50 soruluk sınav provası</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/70" />
                </div>
            </Link>

            {/* Other Tools */}
            <div>
                <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 ml-1">Diğer</h3>
                <div className="space-y-3">
                    <Link to="/cheat-sheet" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Özet Bilgi & Formüller</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Sınav öncesi son kontroller</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>
                    </Link>

                    <Link to="/interview" className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                                    <ClipboardList className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Mülakat Hazırlığı</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Sık sorulan sorular</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
