import React from 'react';
import { Book, Clock, MoreHorizontal, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { topics, sampleQuestions } from '../data/questions';

// Dashboard Card Component
const DashCard = ({ title, subtitle, icon: Icon, color, className }: any) => (
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
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Hoş Geldiniz 👋</h2>
                <p className="text-slate-400">Bugün hedeflerine bir adım daha yaklaş.</p>
            </div>

            {/* Quick Stats */}
            <div className="flex space-x-3">
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
            <div className="grid grid-cols-2 gap-4">
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
                        className="bg-amber-600/10 hover:bg-amber-600/20 h-full"
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
        </div>
    );
};

export default Dashboard;
