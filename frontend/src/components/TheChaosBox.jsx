import React, { useState } from 'react';

export default function TheChaosBox({ onSearchSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearchSubmit(query);
    setQuery(''); // reset input setelah submit
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-6 font-mono text-xs">
      <form onSubmit={handleSubmit} className="relative">
        {/* Kotak Input Minimalis */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=" THE CHAOS BOX: Ketik error atau topik kuis instan... (ex: 'Error pointer baris 5 di Go')"
          className="w-full p-4 bg-zinc-50 dark:bg-[#161619] border border-zinc-200 dark:border-zinc-950 rounded-2xl pl-11 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-800 transition-all shadow-sm"
        />
        
        {/* Icon Pencarian / Mode Terminal */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-600 font-bold select-none text-sm">
          $
        </div>

        {/* Petunjuk Enter */}
        {query && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[9px] bg-zinc-100 dark:bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded animate-fade-in">
            ENTER TO GENERATE
          </div>
        )}
      </form>
    </div>
  );
}