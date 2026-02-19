import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, RefreshCw, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';
import { topics } from '../data/questions';
import { useQuizStore } from '../stores/quizStore';

const Courses: React.FC = () => {
    const topicProgress = useQuizStore(s => s.topicProgress);

    const categories = topics.reduce((acc, topic) => {
        if (!acc[topic.category]) acc[topic.category] = [];
        acc[topic.category].push(topic);
        return acc;
    }, {} as Record<string, typeof topics>);

    return (
        <div className="space-y-6 pb-24">
            <div className="flex items-center space-x-4">
                <Link to="/" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <ChevronLeft className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </Link>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Konu Testleri</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Konu bazlı pekiştirici testler</p>
                </div>
            </div>

            {Object.entries(categories).map(([category, categoryTopics]) => (
                <div key={category}>
                    <div className="flex items-center space-x-3 mb-3 px-1">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">{category}</h3>
                            <p className="text-xs text-gray-400 dark:text-gray-500">{categoryTopics.length} konu</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {categoryTopics.map((topic) => {
                            const progress = topicProgress[topic.id];
                            const isSolved = progress && progress.solvedCount > 0;
                            const correctCount = progress?.correctCount || 0;
                            const wrongCount = progress?.wrongCount || 0;

                            return (
                                <div
                                    key={topic.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                                            <div className={clsx(
                                                "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center",
                                                isSolved ? "bg-emerald-50 dark:bg-emerald-900/30" : "bg-gray-100 dark:bg-gray-700"
                                            )}>
                                                <BookOpen className={clsx("w-4 h-4", isSolved ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400 dark:text-gray-500")} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{topic.name}</p>
                                                {isSolved ? (
                                                    <p className="text-xs mt-0.5">
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">{correctCount} D</span>
                                                        <span className="text-gray-300 dark:text-gray-600 mx-1">/</span>
                                                        <span className="text-red-500 dark:text-red-400 font-medium">{wrongCount} Y</span>
                                                    </p>
                                                ) : (
                                                    <p className="text-xs text-amber-500 dark:text-amber-400 mt-0.5 font-medium">Çözülmedi</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Link
                                            to={`/lecture/${topic.id}`}
                                            className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-bold py-2 rounded-lg flex items-center justify-center transition"
                                        >
                                            <BookOpen className="w-3 h-3 mr-1.5" />
                                            Çalış
                                        </Link>
                                        <Link
                                            to={`/quiz/${topic.id}`}
                                            className={clsx(
                                                "flex-1 text-xs font-bold py-2 rounded-lg flex items-center justify-center transition",
                                                isSolved
                                                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                                                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                                            )}
                                        >
                                            {isSolved ? <RefreshCw className="w-3 h-3 mr-1.5" /> : <ChevronRight className="w-3 h-3 mr-1.5" />}
                                            {isSolved ? "Tekrar" : "Çöz"}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;
