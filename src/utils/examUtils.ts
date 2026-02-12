import { Question, topics, sampleQuestions } from '../data/questions';

export interface ExamDistributionRule {
    category?: string;
    topicIds?: number[];
    percentage: number; // 0-100 of total exam size
}

export interface ExamConfig {
    totalQuestions: number;
    distribution: ExamDistributionRule[];
}

export const generateMockExam = (config: ExamConfig): Question[] => {
    let resultQuestions: Question[] = [];
    let usedQuestionIds = new Set<number>();

    // 1. Process each distribution rule
    config.distribution.forEach(rule => {
        let poolIds: number[] = [];

        // Condition A: Filter by specific Topic IDs
        if (rule.topicIds && rule.topicIds.length > 0) {
            const ruleTopics = topics.filter(t => rule.topicIds?.includes(t.id));
            ruleTopics.forEach(t => {
                if (t.questionIds) poolIds.push(...t.questionIds);
            });
        }
        // Condition B: Filter by Category
        else if (rule.category) {
            const categoryTopics = topics.filter(t => t.category === rule.category);
            categoryTopics.forEach(t => {
                if (t.questionIds) poolIds.push(...t.questionIds);
            });
        }

        // Remove duplicates and already used questions
        // Note: We filter out used questions to prevent duplicates across categories if overlap exists
        poolIds = [...new Set(poolIds)].filter(id => !usedQuestionIds.has(id));

        // Get actual Question objects
        const validPool = sampleQuestions.filter(q => poolIds.includes(q.id));

        // Determine count
        const count = Math.floor((config.totalQuestions * rule.percentage) / 100);

        // Shuffle and select
        const selected = [...validPool].sort(() => 0.5 - Math.random()).slice(0, count);

        selected.forEach(q => {
            resultQuestions.push(q);
            usedQuestionIds.add(q.id);
        });
    });

    // 2. Fill remaining slots if any
    const currentCount = resultQuestions.length;
    const remainingNeeded = config.totalQuestions - currentCount;

    if (remainingNeeded > 0) {
        // Create a pool of ALL unused questions
        const allUnused = sampleQuestions.filter(q => !usedQuestionIds.has(q.id));
        const additional = [...allUnused].sort(() => 0.5 - Math.random()).slice(0, remainingNeeded);
        resultQuestions.push(...additional);
    }

    // 3. Final Shuffle
    return resultQuestions.sort(() => 0.5 - Math.random());
};

export const MOCK_EXAM_CONFIG: ExamConfig = {
    totalQuestions: 50,
    distribution: [
        // 1. Digital Banking (Special Topic) - 10% (5 Questions)
        // IDs 15 and 25 correspond to Digital Banking topics
        { topicIds: [15, 25], percentage: 10 },

        // 2. Banking Law (Category) - 30% (15 Questions)
        { category: "Banka Mevzuatı", percentage: 30 },

        // 3. General Ability (Category) - 30% (15 Questions)
        { category: "Genel Yetenek", percentage: 30 },

        // 4. Economics/Finance (Category) - 30% 
        // This will pick from remaining "Alan Bilgisi" questions (excluding those already picked by rule 1 if any overlap exists, 
        // but since rule 1 is specific topics, and this is category, broad category includes topics. 
        // Our logic filters `!usedQuestionIds`, so it's safe.)
        { category: "Alan Bilgisi", percentage: 30 }
    ]
};
