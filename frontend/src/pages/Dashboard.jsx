import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import TheChaosBox from '../components/TheChaosBox'; // Pastikan komponen ini diimpor

// DATA MOCK DENGAN PROPERTI TRACK
const MOCK_FLASHCARDS = [
    {
        id: 1,
        track: "backend",
        type: "multiple-choice",
        category: "Golang Concurrency",
        question: "Mengapa potongan kode goroutine di bawah ini berpotensi mengalami data race/kebocoran memori?",
        code: `package main\n\nfunc main() {\n    ch := make(chan int)\n    go func() {\n        ch <- 42\n    }()\n    // tidak ada yang membaca ch\n}`,
        options: [
            "Channel tidak di-close sebelum fungsi main berakhir.",
            "Unbuffered channel menyumbat goroutine karena tidak ada receiver yang membaca data.",
            "Terjadi panic secara otomatis karena ukuran memory terlampaui seketika.",
            "Runtime Go langsung menghentikan proses secara paksa akibat penulisan konkuren."
        ],
        correctAnswer: 1,
        tip: "Gunakan buffered channel 'make(chan int, 1)' jika pengiriman data bersifat non-blocking, atau pastikan receiver siap membaca."
    },
    {
        id: 2,
        track: "frontend",
        type: "classic",
        category: "React Optimization",
        question: "Kapan kita harus membungkus fungsi callback di dalam hook useCallback()?",
        code: `const handleAction = useCallback(() => {\n  doSomething(id);\n}, [id]);`,
        answer: "useCallback() wajib digunakan ketika fungsi tersebut dioper sebagai props ke komponen anak yang sudah dioptimasi dengan 'React.memo'...",
        tip: "Jangan gunakan useCallback di setiap fungsi biasa. Overhead alokasi dependency array justru bisa menurunkan performa."
    }
];

export default function Dashboard({ user, theme, onToggleTheme }) {
    const [hp, setHp] = useState(100);
    const [exp, setExp] = useState(0);
    const [level, setLevel] = useState(1);
    const [selectedPath, setSelectedPath] = useState('all');
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredFlashcards = MOCK_FLASHCARDS.filter(card => {
        if (selectedPath === 'all') return true;
        return card.track === selectedPath;
    });

    const currentCard = filteredFlashcards[currentIndex];

    const handleSelectPath = (pathSlug) => {
        setSelectedPath(pathSlug);
        setCurrentIndex(0);
    };

    const handleFlashcardAnswer = (status) => {
        if (status === 'pass') {
            const newExp = exp + 25;
            if (newExp >= 100) {
                setLevel(prev => prev + 1);
                setExp(newExp - 100);
                alert("LEVEL UP! Kapabilitas pemrogramanmu meningkat.");
            } else {
                setExp(newExp);
            }
        } else {
            setHp(prev => Math.max(0, prev - 15));
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredFlashcards.length);
    };

    // Handler untuk menerima input dari The Chaos Box
    const handleChaosSearch = (query) => {
        alert(`Chaos Engine memicu pembuatan kuis instan untuk: "${query}"`);
        // Di bagian selanjutnya, fungsi ini akan menembak Gemini API secara langsung
    };

    return (
        <div className="min-h-screen bg-[#f9f9fb] text-zinc-900 dark:bg-[#121214] dark:text-white flex flex-row font-sans antialiased transition-colors">

            <Sidebar selectedPath={selectedPath} onSelectPath={handleSelectPath} />

            <div className="flex-1 flex flex-col min-w-0">
                <NavbarDashboard user={user} theme={theme} onToggleTheme={onToggleTheme} />

                <main className="flex-1 container mx-auto px-6 py-8 max-w-3xl flex flex-col items-center overflow-y-auto">

                    {/* PLACEMENT: THE CHAOS BOX (Berada di paling atas ruang kerja utama) */}
                    <TheChaosBox onSearchSubmit={handleChaosSearch} />

                    {/* HUD STATUS BAR */}
                    <div className="w-full max-w-xl bg-zinc-100/60 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-900 p-4 rounded-xl mb-8 grid grid-cols-3 gap-4 text-center font-mono">
                        <div>
                            <div className="text-[10px] text-zinc-400 uppercase">Level</div>
                            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">LV. {level}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-400 uppercase">Health Points</div>
                            <div className="text-sm font-bold text-rose-500">{hp} / 100 HP</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-400 uppercase">Experience</div>
                            <div className="text-sm font-bold text-emerald-500">{exp} / 100 EXP</div>
                        </div>
                    </div>

                    {/* INTERFACE SWITCHER CONFIGURATION */}
                    {/* Jika menu sidebar di luar track dipilih (seperti codeshop/quest map), UI bisa disesuaikan di sini */}
                    {selectedPath === 'codeshop' ? (
                        <div className="text-center font-mono text-xs p-10 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-xl">
                            Toko Item CodeShop sedang memuat sistem penukaran poin...
                        </div>
                    ) : selectedPath === 'quest-map' ? (
                        <div className="text-center font-mono text-xs p-10 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-xl">
                            Peta Jalur Terstruktur (AI Quest Maps) sedang disiapkan...
                        </div>
                    ) : filteredFlashcards.length > 0 ? (
                        <Flashcard
                            data={currentCard}
                            onAnswer={handleFlashcardAnswer}
                        />
                    ) : (
                        <div className="w-full max-w-xl p-12 border border-dashed border-zinc-300 dark:border-zinc-800 text-center rounded-2xl font-mono text-zinc-400 text-xs">
                            Ksatria, quest untuk track <span className="text-zinc-800 dark:text-zinc-200 font-bold">"{selectedPath}"</span> belum siap ditambahkan ke core engine.
                            <br />Silakan pilih track Backend, Frontend, atau DevOps terlebih dahulu!
                        </div>
                    )}

                    <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-6 text-center">
                        *Setiap keputusan berdampak pada status real-time engine karakter Anda.
                    </p>

                </main>
            </div>
        </div>
    );
}