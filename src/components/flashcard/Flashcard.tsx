import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { FlashcardData } from '../../data/flashcards';

interface FlashcardProps {
    data: FlashcardData;
}

const Flashcard: React.FC<FlashcardProps> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="w-full h-96 cursor-pointer perspective-1000" onClick={handleFlip}>
            <motion.div
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-md border border-gray-200 dark:border-gray-700 backface-hidden">
                    <div className="mb-4">
                        <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {data.topic}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                        {data.question}
                    </h3>
                    <p className="absolute bottom-8 text-gray-400 dark:text-gray-500 text-sm animate-pulse">
                        Cevabı görmek için dokun
                    </p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 w-full h-full bg-emerald-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-md backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="mb-4">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Cevap
                        </span>
                    </div>
                    <p className="text-xl font-medium text-white leading-relaxed">
                        {data.answer}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Flashcard;
