import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { generateMockExam, MOCK_EXAM_CONFIG } from '../utils/examUtils';
import { Question } from '../data/questions';

const MockExam: React.FC = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Generate exam on mount
        const examQuestions = generateMockExam(MOCK_EXAM_CONFIG);
        setQuestions(examQuestions);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p>Deneme Sınavı Hazırlanıyor...</p>
                </div>
            </div>
        );
    }

    return (
        <QuizScreen
            questions={questions}
            topicName="Genel Deneme Sınavı (50 Soru)"
            topicId={9999} // Special ID for Stats tracking (optional)
            onFinish={() => { }}
            onBack={() => navigate('/')}
        />
    );
};

export default MockExam;
