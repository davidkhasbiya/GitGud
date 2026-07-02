import React from 'react';
import Button from './Button';

export default function Navbar({ onLogin, theme, onToggleTheme }) {
    return (
        <header className="border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-[#121214]/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                <div className="flex items-center space-x-8">
                    <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-mono">
                        gitgud
                    </span>
                    <nav className="hidden md:flex items-center space-x-6 text-sm text-zinc-500 dark:text-zinc-400">
                        <a href="#kurikulum" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Kurikulum</a>
                        <a href="#fitur" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Metode Pembelajaran</a>
                    </nav>
                </div>

                <div className="flex items-center space-x-4">
                    {/* TOMBOL TOGGLE THEME MINIMALIS */}
                    <button
                        onClick={onToggleTheme}
                        className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs font-mono tracking-wider uppercase transition-colors"
                    >
                        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>

                    <Button variant="text" onClick={onLogin} className="text-sm">
                        Sign In
                    </Button>
                    <Button variant="primary" onClick={onLogin}>
                        Mulai Belajar
                    </Button>
                </div>
            </div>
        </header>
    );
}