import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { generateMockExam, MOCK_EXAM_CONFIG } from '../utils/examUtils';
import { Question } from '../data/questions';
import { useQuizStore } from '../stores/quizStore';

const MockExam: React.FC = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const saveQuizResult = useQuizStore(s => s.saveQuizResult);

    useEffect(() => {
        const examQuestions = generateMockExam(MOCK_EXAM_CONFIG);
        setQuestions(examQuestions);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-gray-600 dark:text-gray-400">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Deneme Sınavı Hazırlanıyor...</p>
                </div>
            </div>
        );
    }

    return (
        <QuizScreen
            questions={questions}
            topicName="Genel Deneme Sınavı (50 Soru)"
            topicId={9999}
            onFinish={(results) => saveQuizResult(9999, results)}
            onBack={() => navigate('/')}
        />
    );
};

export default MockExam;
