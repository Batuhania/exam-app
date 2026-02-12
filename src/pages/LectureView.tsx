import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, Clock, BookOpen } from 'lucide-react';
import { lectures } from '../data/lectures';
import { topics } from '../data/questions';

const LectureView: React.FC = () => {
    const { topicId } = useParams<{ topicId: string }>();
    const navigate = useNavigate();

    const id = parseInt(topicId || '0');
    const lecture = lectures.find(l => l.topicId === id);
    const topic = topics.find(t => t.id === id);

    if (!lecture || !topic) {
        return (
            <div className="p-8 text-center text-slate-400">
                <p>Bu konu için henüz anlatım eklenmedi.</p>
                <button onClick={() => navigate(-1)} className="mt-4 text-sky-400 font-bold">Geri Dön</button>
            </div>
        );
    }

    // Simple Markdown-like parser for headers
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-2xl font-bold text-white mt-6 mb-3 border-b border-slate-700 pb-2">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-lg font-semibold text-sky-400 mt-5 mb-2">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('* ')) {
                return <li key={index} className="ml-4 text-slate-300 list-disc">{line.replace('* ', '')}</li>;
            }
            if (line.startsWith('> ')) {
                return (
                    <div key={index} className="bg-amber-500/10 border-l-4 border-amber-500 p-3 my-4 rounded-r-lg text-amber-200 text-sm italic">
                        {line.replace('> ', '')}
                    </div>
                );
            }
            return <p key={index} className="text-slate-300 leading-relaxed mb-2 min-h-[1em]">{line}</p>;
        });
    };

    return (
        <div className="min-h-screen bg-slate-900 pb-24">
            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md z-10 border-b border-slate-800 p-4 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-lg hover:bg-slate-800 transition">
                    <ChevronLeft className="text-slate-400" />
                </button>
                <h1 className="font-bold text-slate-200 truncate max-w-[200px]">{topic.name}</h1>
                <div className="w-8"></div>
            </div>

            <div className="p-5 max-w-2xl mx-auto">
                {/* Meta Card */}
                <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/20 rounded-2xl p-5 mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                            <BookOpen className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                            <h2 className="font-bold text-white text-lg">{lecture.title}</h2>
                            <div className="flex items-center text-xs text-indigo-300 mt-1">
                                <Clock className="w-3 h-3 mr-1" />
                                {lecture.readTime} okuma süresi
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                    {renderContent(lecture.content)}
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-24 right-5 left-5 max-w-2xl mx-auto">
                    <button
                        onClick={() => navigate(`/quiz/${id}`)}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span>Testi Başlat</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LectureView;
