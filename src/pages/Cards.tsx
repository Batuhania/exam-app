import React from 'react';
import FlashcardDeck from '../components/flashcard/FlashcardDeck';
import { sampleFlashcards } from '../data/flashcards';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cards: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
                <Link to="/" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <ChevronLeft className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </Link>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Çalışma Kartları</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hızlı tekrar ile bilgilerini pekiştir.</p>
                </div>
            </div>

            <FlashcardDeck cards={sampleFlashcards} />
        </div>
    );
};

export default Cards;
