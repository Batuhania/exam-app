import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flag, BarChart2, Heart, Clock, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';
import type { Question } from '../../data/questions';

interface QuizScreenProps {
    questions: Question[];
    topicName: string;
    topicId?: number;
    onFinish: (results: { correct: number; wrong: number; empty: number }) => void;
    onBack: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, topicName, topicId, onFinish, onBack }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        new Array(questions.length).fill(null)
    );
    const [showExplanation, setShowExplanation] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [flagged, setFlagged] = useState<boolean[]>(new Array(questions.length).fill(false));
    const [favorited, setFavorited] = useState<boolean[]>(new Array(questions.length).fill(false));
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentIndex];
    const correctCount = selectedAnswers.filter((a, i) => a === questions[i].correctIndex).length;
    const wrongCount = selectedAnswers.filter((a, i) => a !== null && a !== questions[i].correctIndex).length;

    // Timer
    useEffect(() => {
        if (isFinished) return;
        const timer = setInterval(() => setElapsedSeconds(s => s + 1), 1000);
        return () => clearInterval(timer);
    }, [isFinished]);

    const formatTime = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const handleSelectAnswer = (optionIndex: number) => {
        if (isAnswered) return;
        const newAnswers = [...selectedAnswers];
        newAnswers[currentIndex] = optionIndex;
        setSelectedAnswers(newAnswers);
        setIsAnswered(true);
        setShowExplanation(true);
    };

    const [questionKey, setQuestionKey] = useState(0);

    const goToQuestion = (index: number) => {
        if (index < 0 || index >= questions.length) return;
        setCurrentIndex(index);
        setIsAnswered(selectedAnswers[index] !== null);
        setShowExplanation(selectedAnswers[index] !== null);
        setQuestionKey(prev => prev + 1); // Trigger re-animation
    };

    const handleFinish = () => {
        setIsFinished(true);
        const correct = selectedAnswers.filter((a, i) => a === questions[i].correctIndex).length;
        const wrong = selectedAnswers.filter((a, i) => a !== null && a !== questions[i].correctIndex).length;
        const empty = selectedAnswers.filter(a => a === null).length;
        onFinish({ correct, wrong, empty });
    };

    const optionLabels = ['A', 'B', 'C', 'D', 'E'];

    // Result screen
    if (isFinished) {
        const correct = selectedAnswers.filter((a, i) => a === questions[i].correctIndex).length;
        const wrong = selectedAnswers.filter((a, i) => a !== null && a !== questions[i].correctIndex).length;
        const empty = selectedAnswers.filter(a => a === null).length;
        const percentage = Math.round((correct / questions.length) * 100);

        return (
            <div className="flex flex-col items-center justify-center space-y-6 py-8 animate-fade-in">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-500/30 flex items-center justify-center bg-emerald-500/10 relative animate-celebration">
                    <span className="text-4xl font-bold text-emerald-400">%{percentage}</span>
                    <span className="absolute -bottom-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full animate-bounce-in" style={{ animationDelay: '0.4s' }}>BAŞARI</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Test Tamamlandı!</h2>
                <p className="text-slate-400">Süre: {formatTime(elapsedSeconds)}</p>

                <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/20 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                        <p className="text-2xl font-bold text-emerald-400">{correct}</p>
                        <p className="text-xs text-slate-400 mt-1">Doğru</p>
                    </div>
                    <div className="bg-rose-500/10 rounded-xl p-4 text-center border border-rose-500/20 animate-bounce-in" style={{ animationDelay: '0.35s' }}>
                        <p className="text-2xl font-bold text-rose-400">{wrong}</p>
                        <p className="text-xs text-slate-400 mt-1">Yanlış</p>
                    </div>
                    <div className="bg-slate-500/10 rounded-xl p-4 text-center border border-slate-500/20 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                        <p className="text-2xl font-bold text-slate-400">{empty}</p>
                        <p className="text-xs text-slate-400 mt-1">Boş</p>
                    </div>
                </div>

                <div className="flex flex-col w-full max-w-xs space-y-3 mt-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition active:scale-95 flex items-center justify-center"
                    >
                        <Clock className="w-4 h-4 mr-2" />
                        Testi Tekrar Çöz
                    </button>
                    <button
                        onClick={onBack}
                        className="w-full px-6 py-3 bg-slate-700 text-slate-200 rounded-xl font-medium hover:bg-slate-600 transition active:scale-95"
                    >
                        Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-800 transition">
                        <ChevronLeft className="w-5 h-5 text-slate-400" />
                    </button>
                    <div className="truncate max-w-[180px]">
                        <p className="text-sm font-semibold text-white truncate">{topicName}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => {
                            const f = [...flagged];
                            f[currentIndex] = !f[currentIndex];
                            setFlagged(f);
                        }}
                        className={clsx("p-2 rounded-lg transition", flagged[currentIndex] ? "text-amber-400 bg-amber-500/10" : "text-slate-500 hover:text-slate-300")}
                    >
                        <Flag className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg text-slate-500 hover:text-slate-300 transition">
                        <BarChart2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => {
                            const f = [...favorited];
                            f[currentIndex] = !f[currentIndex];
                            setFavorited(f);
                        }}
                        className={clsx("p-2 rounded-lg transition", favorited[currentIndex] ? "text-rose-400 bg-rose-500/10" : "text-slate-500 hover:text-slate-300")}
                    >
                        <Heart className={clsx("w-5 h-5", favorited[currentIndex] && "fill-current")} />
                    </button>
                </div>
            </div>

            {/* Info Bar */}
            <div className="flex items-center justify-between bg-slate-800/60 rounded-xl px-4 py-2.5 mb-5 border border-slate-700/50">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono">{formatTime(elapsedSeconds)}</span>
                </div>
                <div className="text-sm font-medium text-slate-300">
                    <span className="text-sky-400">{currentIndex + 1}</span> / {questions.length}
                </div>
                <div className="text-sm">
                    <span className="text-emerald-400 font-medium">{correctCount} doğru</span>
                    <span className="text-slate-600 mx-1">/</span>
                    <span className="text-rose-400 font-medium">{wrongCount} yanlış</span>
                </div>
            </div>

            {/* Question Card */}
            <div key={questionKey} className="bg-slate-800/40 rounded-2xl p-5 mb-5 border border-slate-700/50 animate-fade-in-up">
                {currentQuestion.image && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-slate-700/50">
                        <img
                            src={currentQuestion.image}
                            alt="Soru görseli"
                            className="w-full h-auto object-contain max-h-64 bg-slate-900/50"
                        />
                    </div>
                )}
                <p className="text-white font-medium leading-relaxed text-[15px]">
                    {currentQuestion.text}
                </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-5 flex-1">
                {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedAnswers[currentIndex] === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    const showResult = isAnswered;

                    let optionStyle = "bg-slate-800/30 border-slate-700/50 text-slate-200 hover:bg-slate-800/60 hover:border-slate-600";
                    if (showResult && isCorrect) {
                        optionStyle = "bg-emerald-500/15 border-emerald-500/40 text-emerald-300";
                    } else if (showResult && isSelected && !isCorrect) {
                        optionStyle = "bg-rose-500/15 border-rose-500/40 text-rose-300";
                    } else if (isSelected && !showResult) {
                        optionStyle = "bg-sky-500/15 border-sky-500/40 text-sky-300";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelectAnswer(idx)}
                            disabled={isAnswered}
                            className={clsx(
                                "w-full text-left rounded-xl p-4 border transition-all flex items-start space-x-3",
                                optionStyle,
                                isAnswered && "cursor-default"
                            )}
                        >
                            <span className={clsx(
                                "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold",
                                showResult && isCorrect ? "bg-emerald-500 text-white" :
                                    showResult && isSelected && !isCorrect ? "bg-rose-500 text-white" :
                                        "bg-slate-700/50 text-slate-400"
                            )}>
                                {optionLabels[idx]}
                            </span>
                            <span className="pt-1 text-sm leading-relaxed">{option}</span>
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {showExplanation && (
                <div className="bg-sky-500/5 rounded-2xl p-5 border border-sky-500/20 mb-5 animate-fade-in-up">
                    <h4 className="text-sky-400 font-bold text-sm mb-2">📖 Çözüm:</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        {currentQuestion.explanation}
                    </p>

                    {/* Lecture Suggestion on Wrong Answer */}
                    {selectedAnswers[currentIndex] !== currentQuestion.correctIndex && topicId && (
                        <div className="mt-4 pt-3 border-t border-sky-500/20">
                            <button
                                onClick={() => navigate(`/lecture/${topicId}`)}
                                className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition group p-2 rounded-lg hover:bg-sky-500/10 w-full"
                            >
                                <BookOpen className="w-5 h-5 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs font-medium text-slate-400 group-hover:text-sky-200">Bu konuda eksiğin olabilir</p>
                                    <p className="text-sm font-bold">İlgili Konu Anlatımına Git</p>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2 pb-4 border-t border-slate-800">
                <button
                    onClick={() => goToQuestion(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={clsx(
                        "flex items-center space-x-1 px-4 py-2.5 rounded-xl font-medium text-sm transition",
                        currentIndex === 0 ? "text-slate-600 cursor-not-allowed" : "text-slate-300 hover:bg-slate-800"
                    )}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Önceki</span>
                </button>

                {currentIndex === questions.length - 1 ? (
                    <button
                        onClick={handleFinish}
                        className="px-6 py-2.5 bg-emerald-500 text-white rounded-xl font-medium text-sm hover:bg-emerald-600 transition active:scale-95"
                    >
                        Bitir
                    </button>
                ) : (
                    <button
                        onClick={() => goToQuestion(currentIndex + 1)}
                        className="flex items-center space-x-1 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-300 hover:bg-slate-800 transition"
                    >
                        <span>Sonraki</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizScreen;
