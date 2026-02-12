import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, RefreshCw, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';
import { topics } from '../data/questions';

const Courses: React.FC = () => {
    // Group by category
    const categories = topics.reduce((acc, topic) => {
        if (!acc[topic.category]) acc[topic.category] = [];
        acc[topic.category].push(topic);
        return acc;
    }, {} as Record<string, typeof topics>);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4">
                <Link to="/" className="p-2 rounded-lg hover:bg-slate-800 transition">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">Konu Testleri</h2>
                    <p className="text-xs text-slate-400">Konu bazlı pekiştirici testler</p>
                </div>
            </div>

            {/* Categories */}
            {Object.entries(categories).map(([category, categoryTopics]) => (
                <div key={category}>
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 mb-3 px-1">
                        <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white">{category}</h3>
                            <p className="text-xs text-slate-500">{categoryTopics.length} konu</p>
                        </div>
                    </div>

                    {/* Topic List */}
                    <div className="space-y-2">
                        {categoryTopics.map((topic) => {
                            const isSolved = topic.solvedCount > 0;
                            const isComplete = topic.solvedCount === topic.questionCount;

                            return (
                                <div
                                    key={topic.id}
                                    className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 hover:bg-slate-800/70 transition group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                                            <div className={clsx(
                                                "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center",
                                                isComplete ? "bg-emerald-500/15" : "bg-slate-700/50"
                                            )}>
                                                <BookOpen className={clsx("w-4 h-4", isComplete ? "text-emerald-400" : "text-slate-500")} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-white truncate">{topic.name}</p>
                                                {isSolved ? (
                                                    <p className="text-xs mt-0.5">
                                                        <span className="text-emerald-400 font-medium">{topic.correctCount} D</span>
                                                        <span className="text-slate-600 mx-1">/</span>
                                                        <span className="text-rose-400 font-medium">{topic.wrongCount} Y</span>
                                                    </p>
                                                ) : (
                                                    <p className="text-xs text-amber-400 mt-0.5 font-medium">Çözülmedi</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Link
                                            to={`/lecture/${topic.id}`}
                                            className="flex-1 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-xs font-bold py-2 rounded-lg flex items-center justify-center transition"
                                        >
                                            <BookOpen className="w-3 h-3 mr-1.5" />
                                            Çalış
                                        </Link>
                                        <Link
                                            to={`/quiz/${topic.id}`}
                                            className={clsx(
                                                "flex-1 text-xs font-bold py-2 rounded-lg flex items-center justify-center transition",
                                                isComplete
                                                    ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                                                    : "bg-sky-600 hover:bg-sky-500 text-white"
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
