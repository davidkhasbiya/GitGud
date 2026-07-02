import React, { useState, useEffect } from 'react';

export default function Flashcard({ data, onAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        setSelectedOption(null);
        setIsLocked(false);
    }, [data]);

    if (!data) return null;

    const handleOptionClick = (index) => {
        if (isLocked) return;
        setSelectedOption(index);
        setIsLocked(true);
        setTimeout(() => onAnswer(index === data.correctAnswer ? 'pass' : 'fail'), 800);
    };

    return (
        <div className="w-full font-mono">
            {/* Metadata (Top) */}
            <div className="flex gap-4 text-[9px] font-bold tracking-[0.2em] text-zinc-400 mb-6 uppercase">
                <span>{data.category}</span>
                <span>/</span>
                <span>{data.type}</span>
            </div>

            {/* Question */}
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-6 leading-snug">
                {data.question}
            </h2>

            {/* Code Block (Minimalist) */}
            {data.code && (
                <pre className="bg-zinc-100 dark:bg-[#161619] p-4 rounded text-[11px] mb-8 border-l-2 border-zinc-300 dark:border-zinc-700 overflow-x-auto text-zinc-800 dark:text-zinc-300">
                    <code>{data.code}</code>
                </pre>
            )}

            {/* Options List */}
            <div className="space-y-2">
                {data.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = index === data.correctAnswer;
                    
                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            disabled={isLocked}
                            className={`w-full text-left py-3 px-4 border transition-all ${
                                isLocked && isSelected && !isCorrect 
                                    ? 'border-red-500 bg-red-500/5 text-red-500' 
                                    : isLocked && isCorrect
                                    ? 'border-emerald-500 bg-emerald-500/5 text-emerald-500'
                                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                            }`}
                        >
                            <span className="text-[10px] mr-4 opacity-50">{String.fromCharCode(65 + index)}</span>
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}