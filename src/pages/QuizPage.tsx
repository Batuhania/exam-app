import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { topics, sampleQuestions } from '../data/questions';
import { useQuizStore } from '../stores/quizStore';

const QuizPage: React.FC = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();
    const saveQuizResult = useQuizStore(s => s.saveQuizResult);

    const topic = topics.find(t => t.id === Number(topicId));

    const topicQuestionIds = topic?.questionIds || [];
    const topicQuestions = sampleQuestions.filter(q => topicQuestionIds.includes(q.id));
    const finalQuestions = topicQuestions.length > 0 ? topicQuestions : [];

    if (!topic) {
        return (
            <div className="text-center py-16">
                <p className="text-gray-500 dark:text-gray-400">Konu bulunamadı.</p>
                <button onClick={() => navigate('/courses')} className="text-emerald-600 dark:text-emerald-400 mt-4 underline">
                    Geri Dön
                </button>
            </div>
        );
    }

    return (
        <QuizScreen
            questions={finalQuestions}
            topicName={topic.name}
            topicId={Number(topicId)}
            onFinish={(results) => saveQuizResult(Number(topicId), results)}
            onBack={() => navigate('/courses')}
        />
    );
};

export default QuizPage;
