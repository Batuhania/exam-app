import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { sampleQuestions } from '../data/questions';

const QuickTest: React.FC = () => {
    const navigate = useNavigate();
    const [started, setStarted] = useState(false);

    // Pick 10 random questions for a quick test
    const shuffled = [...sampleQuestions].sort(() => Math.random() - 0.5);
    const testQuestions = shuffled.slice(0, Math.min(10, shuffled.length));

    if (!started) {
        return (
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-sky-500/20">
                    <span className="text-4xl">⚡</span>
                </div>
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-white">Hızlı Test</h2>
                    <p className="text-slate-400 text-sm max-w-xs">
                        Rastgele seçilmiş {testQuestions.length} soru ile bilgilerini test et.
                    </p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 w-full max-w-xs">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Soru Sayısı</span>
                        <span className="text-white font-medium">{testQuestions.length}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-slate-400">Kategori</span>
                        <span className="text-white font-medium">Karışık</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="text-slate-400">Süre Sınırı</span>
                        <span className="text-white font-medium">Yok</span>
                    </div>
                </div>
                <button
                    onClick={() => setStarted(true)}
                    className="px-8 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 transition active:scale-95"
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
            onFinish={() => { }}
            onBack={() => navigate('/')}
        />
    );
};

export default QuickTest;
