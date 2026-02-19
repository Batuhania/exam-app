// Aggregator file for all content expansion questions
import { hukukQuestions } from './hukuk_questions';
import { genelKulturQuestions } from './genel_kultur_questions';
import { ingilizceQuestions } from './ingilizce_questions';
import { finansQuestions } from './finans_questions';
import { muhasebeQuestions } from './muhasebe_questions';
import type { Question } from './questions';

export const contentExpansionQuestions: Question[] = [
    ...hukukQuestions,
    ...genelKulturQuestions,
    ...ingilizceQuestions,
    ...finansQuestions,
    ...muhasebeQuestions,
];
