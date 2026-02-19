import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { sampleQuestions } from '../data/questions';
import { useQuizStore } from '../stores/quizStore';

const QuickTest: React.FC = () => {
    const navigate = useNavigate();
    const [started, setStarted] = useState(false);
    const saveQuizResult = useQuizStore(s => s.saveQuizResult);

    // Fix: useMemo prevents re-shuffling on every render
    const testQuestions = useMemo(() => {
        const shuffled = [...sampleQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(10, shuffled.length));
    }, []);

    if (!started) {
        return (
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
                <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                </div>
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hızlı Test</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                        Rastgele seçilmiş {testQuestions.length} soru ile bilgilerini test et.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm w-full max-w-xs">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Soru Sayısı</span>
                        <span className="text-gray-900 dark:text-white font-medium">{testQuestions.length}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-500 dark:text-gray-400">Kategori</span>
                        <span className="text-gray-900 dark:text-white font-medium">Karışık</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-500 dark:text-gray-400">Süre Sınırı</span>
                        <span className="text-gray-900 dark:text-white font-medium">Yok</span>
                    </div>
                </div>
                <button
                    onClick={() => setStarted(true)}
                    className="px-8 py-3.5 bg-emerald-600 text-white rounded-xl font-bold text-lg shadow-sm hover:bg-emerald-700 transition active:scale-95"
                >
                    Teste Başla
                </button>
            </div>
        );
    }

    return (
        <QuizScreen
            questions={testQuestions}
            topicName="Hızlı Test (Karışık)"
            topicId={0}
            onFinish={(results) => saveQuizResult(0, results)}
            onBack={() => navigate('/')}
        />
    );
};

export default QuickTest;
