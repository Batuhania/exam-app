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
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Harika İş! 🎉</h3>
                <p className="text-slate-400">Bu destedeki tüm kartları tamamladın.</p>
                <button
                    onClick={resetDeck}
                    className="flex items-center space-x-2 px-6 py-3 bg-slate-800 rounded-xl text-white hover:bg-slate-700 transition"
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
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-sky-500 transition-all duration-300"
                    style={{ width: `${((currentIndex) / cards.length) * 100}%` }}
                ></div>
            </div>

            <div className="text-slate-400 text-sm font-medium">
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
                    className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/50 flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition active:scale-95"
                    aria-label="Bilmiyorum"
                >
                    <X className="w-8 h-8" />
                </button>
                <button
                    onClick={() => handleNext(true)}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition active:scale-95"
                    aria-label="Biliyorum"
                >
                    <Check className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default FlashcardDeck;
