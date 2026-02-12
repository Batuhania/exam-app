import React from 'react';
import FlashcardDeck from '../components/flashcard/FlashcardDeck';
import { sampleFlashcards } from '../data/flashcards';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cards: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
                <Link to="/" className="p-2 rounded-lg hover:bg-slate-800 transition">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">Çalışma Kartları</h2>
                    <p className="text-xs text-slate-400">Hızlı tekrar ile bilgilerini pekiştir.</p>
                </div>
            </div>

            <FlashcardDeck cards={sampleFlashcards} />
        </div>
    );
};

export default Cards;
