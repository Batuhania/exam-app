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
                <div className="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-slate-700 backface-hidden">
                    <div className="mb-4">
                        <span className="bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {data.topic}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                        {data.question}
                    </h3>
                    <p className="absolute bottom-8 text-slate-500 text-sm animate-pulse">
                        Cevabı görmek için dokun
                    </p>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-indigo-500/30 backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="mb-4">
                        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Cevap
                        </span>
                    </div>
                    <p className="text-xl font-medium text-slate-100 leading-relaxed">
                        {data.answer}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Flashcard;
