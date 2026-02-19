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
        setQuestionKey(prev => prev + 1);
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
                <div className="w-32 h-32 rounded-full border-4 border-emerald-200 dark:border-emerald-700 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/30 relative animate-celebration">
                    <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">%{percentage}</span>
                    <span className="absolute -bottom-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full animate-bounce-in" style={{ animationDelay: '0.4s' }}>BAŞARI</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Test Tamamlandı!</h2>
                <p className="text-gray-500 dark:text-gray-400">Süre: {formatTime(elapsedSeconds)}</p>

                <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4 text-center border border-emerald-200 dark:border-emerald-700 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{correct}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Doğru</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-4 text-center border border-red-200 dark:border-red-700 animate-bounce-in" style={{ animationDelay: '0.35s' }}>
                        <p className="text-2xl font-bold text-red-500 dark:text-red-400">{wrong}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Yanlış</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-600 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                        <p className="text-2xl font-bold text-gray-500 dark:text-gray-400">{empty}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Boş</p>
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
                        className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition active:scale-95"
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
                    <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <ChevronLeft className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </button>
                    <div className="truncate max-w-[180px]">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{topicName}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => {
                            const f = [...flagged];
                            f[currentIndex] = !f[currentIndex];
                            setFlagged(f);
                        }}
                        className={clsx("p-2 rounded-lg transition", flagged[currentIndex] ? "text-amber-500 bg-amber-50 dark:bg-amber-900/30" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300")}
                    >
                        <Flag className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition">
                        <BarChart2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => {
                            const f = [...favorited];
                            f[currentIndex] = !f[currentIndex];
                            setFavorited(f);
                        }}
                        className={clsx("p-2 rounded-lg transition", favorited[currentIndex] ? "text-red-500 bg-red-50 dark:bg-red-900/30" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300")}
                    >
                        <Heart className={clsx("w-5 h-5", favorited[currentIndex] && "fill-current")} />
                    </button>
                </div>
            </div>

            {/* Info Bar */}
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl px-4 py-2.5 mb-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono">{formatTime(elapsedSeconds)}</span>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-600 dark:text-emerald-400">{currentIndex + 1}</span> / {questions.length}
                </div>
                <div className="text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{correctCount} doğru</span>
                    <span className="text-gray-300 dark:text-gray-600 mx-1">/</span>
                    <span className="text-red-500 dark:text-red-400 font-medium">{wrongCount} yanlış</span>
                </div>
            </div>

            {/* Question Card */}
            <div key={questionKey} className="bg-white dark:bg-gray-800 rounded-xl p-5 mb-5 border border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in-up">
                {currentQuestion.image && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        <img
                            src={currentQuestion.image}
                            alt="Soru görseli"
                            className="w-full h-auto object-contain max-h-64 bg-gray-50 dark:bg-gray-900"
                        />
                    </div>
                )}
                <p className="text-gray-900 dark:text-white font-medium leading-relaxed text-[15px]">
                    {currentQuestion.text}
                </p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-5 flex-1">
                {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedAnswers[currentIndex] === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    const showResult = isAnswered;

                    let optionStyle = "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 dark:hover:border-gray-600";
                    if (showResult && isCorrect) {
                        optionStyle = "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300";
                    } else if (showResult && isSelected && !isCorrect) {
                        optionStyle = "bg-red-50 dark:bg-red-900/30 border-red-300 dark:border-red-600 text-red-700 dark:text-red-300";
                    } else if (isSelected && !showResult) {
                        optionStyle = "bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleSelectAnswer(idx)}
                            disabled={isAnswered}
                            className={clsx(
                                "w-full text-left rounded-xl p-4 border transition-all flex items-start space-x-3 shadow-sm",
                                optionStyle,
                                isAnswered && "cursor-default"
                            )}
                        >
                            <span className={clsx(
                                "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold",
                                showResult && isCorrect ? "bg-emerald-500 text-white" :
                                    showResult && isSelected && !isCorrect ? "bg-red-500 text-white" :
                                        "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
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
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800 mb-5 animate-fade-in-up">
                    <h4 className="text-blue-700 dark:text-blue-400 font-bold text-sm mb-2">📖 Çözüm:</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {currentQuestion.explanation}
                    </p>

                    {selectedAnswers[currentIndex] !== currentQuestion.correctIndex && topicId && (
                        <div className="mt-4 pt-3 border-t border-blue-200 dark:border-blue-700">
                            <button
                                onClick={() => navigate(`/lecture/${topicId}`)}
                                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition group p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 w-full"
                            >
                                <BookOpen className="w-5 h-5 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bu konuda eksiğin olabilir</p>
                                    <p className="text-sm font-bold">İlgili Konu Anlatımına Git</p>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2 pb-4 border-t border-gray-200 dark:border-gray-700">
                <button
                    onClick={() => goToQuestion(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={clsx(
                        "flex items-center space-x-1 px-4 py-2.5 rounded-xl font-medium text-sm transition",
                        currentIndex === 0 ? "text-gray-300 dark:text-gray-600 cursor-not-allowed" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Önceki</span>
                </button>

                {currentIndex === questions.length - 1 ? (
                    <button
                        onClick={handleFinish}
                        className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-medium text-sm hover:bg-emerald-700 transition active:scale-95"
                    >
                        Bitir
                    </button>
                ) : (
                    <button
                        onClick={() => goToQuestion(currentIndex + 1)}
                        className="flex items-center space-x-1 px-4 py-2.5 rounded-xl font-medium text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
