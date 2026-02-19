import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TopicProgress {
    solvedCount: number;
    correctCount: number;
    wrongCount: number;
    lastAttemptDate?: string;
}

interface QuizResult {
    topicId: number;
    correct: number;
    wrong: number;
    empty: number;
    total: number;
    date: string;
    elapsedSeconds?: number;
}

interface QuizStore {
    // Per-topic progress
    topicProgress: Record<number, TopicProgress>;
    // History of quiz results
    quizHistory: QuizResult[];
    // Total stats
    totalCorrect: number;
    totalWrong: number;
    totalSolved: number;
    // Daily streak
    streakDays: number;
    lastStudyDate: string | null;

    // Actions
    saveQuizResult: (topicId: number, result: { correct: number; wrong: number; empty: number }, elapsedSeconds?: number) => void;
    getTopicProgress: (topicId: number) => TopicProgress;
    resetAllProgress: () => void;
}

const initialState = {
    topicProgress: {} as Record<number, TopicProgress>,
    quizHistory: [] as QuizResult[],
    totalCorrect: 0,
    totalWrong: 0,
    totalSolved: 0,
    streakDays: 0,
    lastStudyDate: null as string | null,
};

export const useQuizStore = create<QuizStore>()(
    persist(
        (set, get) => ({
            ...initialState,

            saveQuizResult: (topicId, result, elapsedSeconds) => {
                const today = new Date().toISOString().split('T')[0];
                const state = get();

                // Update topic progress
                const existing = state.topicProgress[topicId] || { solvedCount: 0, correctCount: 0, wrongCount: 0 };
                const updatedProgress: TopicProgress = {
                    solvedCount: existing.solvedCount + result.correct + result.wrong + result.empty,
                    correctCount: existing.correctCount + result.correct,
                    wrongCount: existing.wrongCount + result.wrong,
                    lastAttemptDate: today,
                };

                // Update streak
                let newStreak = state.streakDays;
                if (state.lastStudyDate !== today) {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayStr = yesterday.toISOString().split('T')[0];

                    if (state.lastStudyDate === yesterdayStr) {
                        newStreak = state.streakDays + 1;
                    } else if (state.lastStudyDate !== today) {
                        newStreak = 1;
                    }
                }

                // Add to history
                const newResult: QuizResult = {
                    topicId,
                    correct: result.correct,
                    wrong: result.wrong,
                    empty: result.empty,
                    total: result.correct + result.wrong + result.empty,
                    date: today,
                    elapsedSeconds,
                };

                set({
                    topicProgress: {
                        ...state.topicProgress,
                        [topicId]: updatedProgress,
                    },
                    quizHistory: [...state.quizHistory, newResult],
                    totalCorrect: state.totalCorrect + result.correct,
                    totalWrong: state.totalWrong + result.wrong,
                    totalSolved: state.totalSolved + result.correct + result.wrong + result.empty,
                    streakDays: newStreak,
                    lastStudyDate: today,
                });
            },

            getTopicProgress: (topicId) => {
                return get().topicProgress[topicId] || { solvedCount: 0, correctCount: 0, wrongCount: 0 };
            },

            resetAllProgress: () => {
                set(initialState);
            },
        }),
        {
            name: 'exammaster-quiz-progress',
        }
    )
);
