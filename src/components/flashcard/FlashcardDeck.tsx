import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import Flashcard from './Flashcard';
import type { FlashcardData } from '../../data/flashcards';

interface FlashcardDeckProps {
    cards: FlashcardData[];
}

const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [completed, setCompleted] = useState(false);

    const handleNext = (known: boolean) => {
        setDirection(known ? 1 : -1);

        if (currentIndex + 1 < cards.length) {
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setDirection(0);
            }, 300);
        } else {
            setCompleted(true);
        }
    };

    const resetDeck = () => {
        setCurrentIndex(0);
        setCompleted(false);
    };

    if (completed) {
        return (
            <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center h-96">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-emerald-200 dark:border-emerald-700">
                    <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Harika İş! 🎉</h3>
                <p className="text-gray-500 dark:text-gray-400">Bu destedeki tüm kartları tamamladın.</p>
                <button
                    onClick={resetDeck}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span>Tekrar Başla</span>
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center space-y-8 max-w-sm mx-auto">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex) / cards.length) * 100}%` }}
                ></div>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Kart {currentIndex + 1} / {cards.length}
            </div>

            <div className="relative w-full h-96">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 300, opacity: 0, rotate: 20 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{
                            x: direction === 1 ? -300 : 300,
                            opacity: 0,
                            rotate: direction === 1 ? -20 : 20
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Flashcard data={cards[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex space-x-6">
                <button
                    onClick={() => handleNext(false)}
                    className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 flex items-center justify-center text-red-500 dark:text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition active:scale-95"
                    aria-label="Bilmiyorum"
                >
                    <X className="w-8 h-8" />
                </button>
                <button
                    onClick={() => handleNext(true)}
                    className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-200 dark:border-emerald-700 flex items-center justify-center text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition active:scale-95"
                    aria-label="Biliyorum"
                >
                    <Check className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default FlashcardDeck;
