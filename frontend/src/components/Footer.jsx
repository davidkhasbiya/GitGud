import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-900 py-6 bg-zinc-100/50 dark:bg-zinc-950/40 mt-auto transition-colors">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 dark:text-zinc-400 space-y-3 sm:space-y-0">
                {/* Hak Cipta */}
                <div>&copy; {new Date().getFullYear()} GitGud App. All rights reserved.</div>

                {/* Informasi Repositori & Teknologi */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                    <span className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer transition-colors">
                        Open Source (GitHub)
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-800">•</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                        Powered by Go, Cloud Run & Gemini AI
                    </span>
                </div>
            </div>
        </footer>
    );
}