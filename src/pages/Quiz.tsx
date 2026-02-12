import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronRight, ChevronLeft, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

// Mock Data Structure for a Question
interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // index of the correct option
    explanation: string;
}

const mockQuestions: Question[] = [
    {
        id: 1,
        text: "5411 Sayılı Bankacılık Kanunu'na göre, aşağıdakilerden hangisi bankaların kurucularında aranan şartlardan biri değildir?",
        options: [
            "Müflis olmaması",
            "Konkordato ilan etmemiş olması",
            "Kasten işlenen bir suçtan dolayı ağır hapis cezasına çarptırılmamış olması",
            "En az üniversite mezunu olması",
            "Tasfiye edilecek bankalarda ortak olmaması"
        ],
        correctAnswer: 3, // "En az üniversite mezunu olması" - This requires checking actual law, but for mock data its fine.
        explanation: "Bankacılık Kanunu'na göre kurucu ortaklarda üniversite mezuniyeti şartı aranmaz (yönetim kurulu üyeleri için aranır)."
    },
    {
        id: 2,
        text: "Aşağıdakilerden hangisi Merkez Bankası'nın temel görevlerinden biridir?",
        options: [
            "Kredi kartı borçlarını düzenlemek",
            "Fiyat istikrarını sağlamak",
            "Mevduat toplamak",
            "Vergi oranlarını belirlemek",
            "Bankalara el koymak"
        ],
        correctAnswer: 1,
        explanation: "TCMB'nin temel amacı fiyat istikrarını sağlamaktır."
    }
];

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const question = mockQuestions[currentQuestionIndex];

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleConfirm = () => {
        if (selectedOption === null) return;
        setIsAnswered(true);
    };

    const handleNext = () => {
        if (currentQuestionIndex < mockQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            alert("Test Bitti!"); // Placeholder for result screen
        }
    };

    const getOptionStatus = (index: number) => {
        if (!isAnswered) {
            return selectedOption === index ? 'selected' : 'default';
        }

        if (index === question.correctAnswer) return 'correct';
        if (selectedOption === index && index !== question.correctAnswer) return 'wrong';
        return 'default';
    };

    // Helper styles based on status
    const getOptionStyles = (status: 'default' | 'selected' | 'correct' | 'wrong') => {
        switch (status) {
            case 'selected': return "border-primary-500 bg-primary-50 text-primary-900";
            case 'correct': return "border-emerald-500 bg-emerald-50 text-emerald-900";
            case 'wrong': return "border-rose-500 bg-rose-50 text-rose-900";
            default: return "border-gray-200 hover:border-primary-200 hover:bg-gray-50 text-gray-700";
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Quiz Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-semibold text-gray-500">Soru {currentQuestionIndex + 1}/{mockQuestions.length}</span>
                    <div className="h-4 w-px bg-gray-200"></div>
                    <span className="text-sm font-medium text-primary-600">Banka Hukuku</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm font-mono bg-gray-100 px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4 mr-2" />
                    14:20
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed mb-8">
                    {question.text}
                </h3>

                <div className="space-y-3">
                    {question.options.map((option, index) => {
                        const status = getOptionStatus(index);
                        const styles = getOptionStyles(status);

                        return (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(index)}
                                disabled={isAnswered}
                                className={clsx(
                                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                                    styles
                                )}
                            >
                                <div className="flex items-center">
                                    <div className={clsx(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 border",
                                        status === 'selected' ? "bg-primary-500 text-white border-primary-500" :
                                            status === 'correct' ? "bg-emerald-500 text-white border-emerald-500" :
                                                status === 'wrong' ? "bg-rose-500 text-white border-rose-500" :
                                                    "bg-white text-gray-500 border-gray-200 group-hover:border-primary-300"
                                    )}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span>{option}</span>
                                </div>

                                {status === 'correct' && <CheckCircle className="w-6 h-6 text-emerald-500" />}
                                {status === 'wrong' && <XCircle className="w-6 h-6 text-rose-500" />}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Explanation Area (Visible after answer) */}
            {isAnswered && (
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-blue-900 mb-1">Çözüm Açıklaması</h4>
                            <p className="text-blue-800 text-sm leading-relaxed">
                                {question.explanation}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation Footer */}
            <div className="flex justify-between items-center py-4">
                <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center px-6 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Önceki
                </button>

                {!isAnswered ? (
                    <button
                        onClick={handleConfirm}
                        disabled={selectedOption === null}
                        className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-primary-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                        Cevabı Kontrol Et
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-primary-700 active:scale-95 transition-all"
                    >
                        Sonraki Soru
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
