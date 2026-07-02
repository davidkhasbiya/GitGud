import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function NavbarDashboard({ user, theme, onToggleTheme }) {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Gagal log out:", error.message);
        }
    };

    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090b] font-mono text-[10px] uppercase tracking-widest">
            
            {/* Left: System Path */}
            <div className="flex items-center gap-4 text-zinc-500">
                <span>GITGUD_OS</span>
                <span className="text-zinc-300 dark:text-zinc-700">/</span>
                <span className="text-zinc-900 dark:text-zinc-100 font-bold">WORKSPACE</span>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-8 text-zinc-500">
                <button 
                    onClick={onToggleTheme}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                    THEME: {theme === 'dark' ? '[LIGHT]' : '[DARK]'}
                </button>

                <div className="flex items-center gap-6">
                    <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                        {user?.displayName || 'USER_ID'}
                    </span>
                    
                    <button
                        onClick={handleSignOut}
                        className="hover:text-red-500 transition-colors"
                    >
                        [LOGOUT]
                    </button>
                </div>
            </div>
        </nav>
    );
}