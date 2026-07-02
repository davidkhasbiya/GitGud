import React, { useState } from 'react';

export default function Sidebar({ selectedPath, onSelectPath }) {
    const [isLearningPathOpen, setIsLearningPathOpen] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);

    // Mengganti emoji dengan komponen SVG Icon minimalis & modern (stroke-width: 1.5 biar clean)
    const learningPaths = [
        { 
            name: 'Frontend Developer', 
            slug: 'frontend', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        { 
            name: 'Backend Developer', 
            slug: 'backend', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        { 
            name: 'DevOps Engineer', 
            slug: 'devops', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        },
        { 
            name: 'Data Science', 
            slug: 'data-science', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2M4 4h16v16H4V4z" />
                </svg>
            )
        },
        { 
            name: 'AI Engineer', 
            slug: 'ai-engineer', 
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
    ];

    return (
        <aside
            className={`h-screen bg-zinc-50 dark:bg-[#0c0c0e] border-r border-zinc-200 dark:border-zinc-900 flex flex-col font-mono text-xs sticky top-0 transition-all duration-200 ${isMinimized ? 'w-16' : 'w-60'}`}
        >
            {/* Header: Logo & Toggle Minimize */}
            <div className={`p-4 border-b border-zinc-200 dark:border-zinc-900 flex items-center ${isMinimized ? 'justify-center' : 'justify-between'} h-14`}>
                {!isMinimized && (
                    <div className="flex items-center gap-2 tracking-tighter">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-black text-zinc-900 dark:text-zinc-100 text-[12px]">GITGUD<span className="text-zinc-400 font-normal">_SYS</span></span>
                    </div>
                )}

                <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 rounded text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    title={isMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
                >
                    {isMinimized ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M11 19l-7-7 7-7M19 19l-7-7 7-7" /></svg>
                    )}
                </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 py-4 overflow-y-auto space-y-6">
                
                {/* Core System Section */}
                <div className="space-y-0.5 px-2">
                    {!isMinimized && (
                        <div className="px-3 text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-bold mb-2">Core Platform</div>
                    )}
                    
                    {/* Semua Flashcard */}
                    <button
                        onClick={() => onSelectPath('all')}
                        className={`w-full flex items-center ${isMinimized ? 'justify-center py-2.5' : 'gap-3 px-3 py-2'} rounded-md transition-all ${
                            selectedPath === 'all'
                                ? 'bg-zinc-900 text-white dark:bg-zinc-900 dark:text-emerald-400 font-bold border-l-2 border-emerald-500 rounded-l-none'
                                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {!isMinimized && <span>Semua Flashcard</span>}
                    </button>

                    {/* AI Quest Maps */}
                    <button
                        onClick={() => onSelectPath('quest-map')}
                        className={`w-full flex items-center ${isMinimized ? 'justify-center py-2.5' : 'gap-3 px-3 py-2'} rounded-md transition-all ${
                            selectedPath === 'quest-map'
                                ? 'bg-zinc-900 text-white dark:bg-zinc-900 dark:text-emerald-400 font-bold border-l-2 border-emerald-500 rounded-l-none'
                                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 4L9 7" />
                        </svg>
                        {!isMinimized && <span>AI Quest Maps</span>}
                    </button>

                    {/* CodeShop */}
                    <button
                        onClick={() => onSelectPath('codeshop')}
                        className={`w-full flex items-center ${isMinimized ? 'justify-center py-2.5' : 'gap-3 px-3 py-2'} rounded-md transition-all ${
                            selectedPath === 'codeshop'
                                ? 'bg-zinc-900 text-white dark:bg-zinc-900 dark:text-emerald-400 font-bold border-l-2 border-emerald-500 rounded-l-none'
                                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {!isMinimized && <span>CodeShop</span>}
                    </button>
                </div>

                {/* Specialization / Tracks Section */}
                <div className="space-y-0.5 px-2">
                    {!isMinimized ? (
                        <div className="px-3 text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-bold mb-2 flex justify-between items-center">
                            <span>Specialization</span>
                            <button
                                onClick={() => setIsLearningPathOpen(!isLearningPathOpen)}
                                className="text-[9px] text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                            >
                                {isLearningPathOpen ? '[ hide ]' : '[ show ]'}
                            </button>
                        </div>
                    ) : (
                        <div className="border-t border-zinc-200 dark:border-zinc-900 my-2 mx-2" />
                    )}

                    {(isLearningPathOpen || isMinimized) && (
                        <div className="space-y-0.5">
                            {learningPaths.map((path) => {
                                const isActive = selectedPath === path.slug;
                                return (
                                    <button
                                        key={path.slug}
                                        onClick={() => onSelectPath(path.slug)}
                                        className={`w-full flex items-center ${isMinimized ? 'justify-center py-2.5' : 'gap-3 px-3 py-2'} rounded-md transition-all ${
                                            isActive
                                                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-emerald-400 font-bold border-l-2 border-emerald-500 rounded-l-none'
                                                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40'
                                        }`}
                                        title={isMinimized ? path.name : ""}
                                    >
                                        <div className={isActive ? 'text-emerald-500' : 'text-zinc-400 dark:text-zinc-600'}>
                                            {path.icon}
                                        </div>
                                        {!isMinimized && <span className="text-[11px] font-sans font-medium">{path.name}</span>}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Configuration Section */}
                <div className="space-y-0.5 px-2">
                    {!isMinimized && (
                        <div className="px-3 text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-bold mb-2">Config</div>
                    )}
                    <button
                        className="w-full flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-all px-3 py-2 rounded-md"
                    >
                        <svg className="w-4 h-4 mr-3 text-zinc-400 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {!isMinimized && <span>Engine Control</span>}
                    </button>
                </div>

            </div>

            {/* Footer */}
            <div className="p-3 border-t border-zinc-200 dark:border-zinc-900 text-[10px] tracking-tight font-mono text-zinc-400 dark:text-zinc-600 text-center truncate">
                {isMinimized ? 'rev.1.0' : 'gitgud_rev.1.0.2'}
            </div>
        </aside>
    );
}