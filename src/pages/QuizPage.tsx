import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizScreen from '../components/quiz/QuizScreen';
import { topics, sampleQuestions } from '../data/questions';

const QuizPage: React.FC = () => {
    const { topicId } = useParams();
    const navigate = useNavigate();

    const topic = topics.find(t => t.id === Number(topicId));

    // Konuya ait soruları filtrele
    const topicQuestionIds = topic?.questionIds || [];
    const topicQuestions = sampleQuestions.filter(q => topicQuestionIds.includes(q.id));
    const finalQuestions = topicQuestions.length > 0 ? topicQuestions : [];

    if (!topic) {
        return (
            <div className="text-center py-16">
                <p className="text-slate-400">Konu bulunamadı.</p>
                <button onClick={() => navigate('/courses')} className="text-sky-400 mt-4 underline">
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
            onFinish={() => { }}
            onBack={() => navigate('/courses')}
        />
    );
};

export default QuizPage;
