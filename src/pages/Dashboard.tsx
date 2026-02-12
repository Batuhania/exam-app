import React from 'react';
import { Book, Clock, MoreHorizontal, Layers, Zap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { topics, sampleQuestions } from '../data/questions';

interface DashCardProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    color: string;
    className?: string;
}

const DashCard = ({ title, subtitle, icon: Icon, color, className }: DashCardProps) => (
    <div className={clsx(
        "relative overflow-hidden rounded-2xl p-4 flex flex-col justify-between aspect-[4/3] group cursor-pointer transition-all hover:scale-[1.02] active:scale-95 border border-slate-800",
        className
    )}>
        {/* Gradient blob */}
        <div className={clsx("absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl opacity-20", color)}></div>

        <div className="z-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-slate-950/30 backdrop-blur-sm border border-white/10">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">{title}</h3>
            <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
        </div>
    </div>
);

const Dashboard: React.FC = () => {
    const totalTopics = topics.length;
    const totalQuestions = sampleQuestions.length;
    const solvedTopics = topics.filter(t => t.solvedCount > 0).length;

    return (
        <div className="space-y-8">
            {/* Hero */}
            <div className="animate-fade-in-down">
                <h2 className="text-2xl font-bold text-white mb-1">Hoş Geldiniz 👋</h2>
                <p className="text-slate-400">Bugün hedeflerine bir adım daha yaklaş.</p>
            </div>

            {/* Quick Stats */}
            <div className="flex space-x-3 animate-fade-in-up">
                <div className="flex-1 bg-sky-500/10 rounded-xl p-3 text-center border border-sky-500/20">
                    <p className="text-lg font-bold text-sky-400">{solvedTopics}/{totalTopics}</p>
                    <p className="text-[10px] text-slate-400">Konu</p>
                </div>
                <div className="flex-1 bg-emerald-500/10 rounded-xl p-3 text-center border border-emerald-500/20">
                    <p className="text-lg font-bold text-emerald-400">{totalQuestions}</p>
                    <p className="text-[10px] text-slate-400">Soru</p>
                </div>
                <div className="flex-1 bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/20">
                    <p className="text-lg font-bold text-purple-400">5</p>
                    <p className="text-[10px] text-slate-400">Kart</p>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                <Link to="/courses">
                    <DashCard
                        title="Konular"
                        subtitle={`${totalTopics} Konu`}
                        icon={Book}
                        color="bg-blue-500"
                        className="bg-indigo-600/10 hover:bg-indigo-600/20 h-full"
                    />
                </Link>
                <Link to="/quick-test">
                    <DashCard
                        title="Hızlı Test"
                        subtitle={`${totalQuestions} Soru`}
                        icon={Zap}
                        color="bg-amber-500"
                        className="bg-slate-950/30 backdrop-blur-sm border border-white/10"
                    />
                </Link>
                <Link to="/cards">
                    <DashCard
                        title="Kartlar"
                        subtitle="Hızlı Tekrar"
                        icon={Layers}
                        color="bg-purple-500"
                        className="bg-purple-600/10 hover:bg-purple-600/20 h-full"
                    />
                </Link>
                <Link to="/pomodoro">
                    <DashCard
                        title="Pomodoro"
                        subtitle="Odaklan"
                        icon={Clock}
                        color="bg-orange-500"
                        className="bg-orange-600/10 hover:bg-orange-600/20 h-full"
                    />
                </Link>

                <Link to="/mock-exam" className="col-span-2">
                    <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl p-4 flex items-center justify-between border border-pink-500/30 hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>

                        <div className="flex items-center space-x-4 z-10">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center border border-pink-500/30">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white">Genel Deneme Sınavı</h3>
                                <p className="text-xs text-pink-200">Gerçek sınav provası (50 Soru)</p>
                            </div>
                        </div>

                        <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg shadow-pink-500/20 group-hover:bg-pink-400 transition">
                            BAŞLA
                        </div>
                    </div>
                </Link>

                {/* Cheat Sheet Button */}
                <Link to="/cheat-sheet" className="col-span-2">
                    <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 hover:bg-slate-800 transition cursor-pointer flex items-center justify-between group">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-200 group-hover:text-emerald-400 transition">Özet Bilgi & Formüller</h3>
                                <p className="text-xs text-slate-500">Sınav öncesi son kontroller için el notları</p>
                            </div>
                        </div>
                        <MoreHorizontal className="text-slate-600 group-hover:text-emerald-400 transition" />
                    </div>
                </Link>
            </div>

            {/* Mülakat */}
            <Link to="/interview">
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 flex items-center justify-between hover:bg-slate-800 transition cursor-pointer group">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition">
                            <span className="text-xl">🎤</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-white">Mülakat Soruları</h4>
                            <p className="text-xs text-slate-400">Son eklenen 5 soru</p>
                        </div>
                    </div>
                    <MoreHorizontal className="text-slate-500 group-hover:text-slate-300 transition" />
                </div>
            </Link>

            {/* Bulk Import */}
            <Link to="/bulk-import">
                <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 hover:bg-slate-800 transition cursor-pointer flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                            <span className="text-lg">📥</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-200 group-hover:text-violet-400 transition">Toplu Soru İçe Aktar</h3>
                            <p className="text-xs text-slate-500">JSON dosyasından soru yükle</p>
                        </div>
                    </div>
                    <MoreHorizontal className="text-slate-600 group-hover:text-violet-400 transition" />
                </div>
            </Link>
        </div>
    );
};

export default Dashboard;
