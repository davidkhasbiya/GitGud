import React from 'react';
import Navbar from '../components/NavbarLanding';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { loginWithGoogle } from '../firebase';

export default function LandingPage({ theme, onToggleTheme }) {
    const handleLogin = async () => {
        try {
            const user = await loginWithGoogle();
            alert(`Selamat datang kembali, ${user.displayName}.`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-[#f9f9fb] text-zinc-900 dark:bg-[#121214] dark:text-white flex flex-col font-sans antialiased transition-colors">

            <Navbar onLogin={handleLogin} theme={theme} onToggleTheme={onToggleTheme} />

            {/* 1. HERO SECTION */}
            <main className="container mx-auto px-6 flex flex-col items-center text-center justify-center py-24 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight mb-6 max-w-3xl">
                    Menguasai Pemrograman Lewat <br />
                    <span className="text-zinc-400 dark:text-zinc-500">Pendekatan Interaktif & Terukur.</span>
                </h1>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
                    Tingkatkan kapabilitas pemecahan masalah (*problem solving*) melalui kompilasi kode instan,
                    analisis sintaksis berbasis data, dan pelacakan perkembangan kompetensi secara konsisten.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
                    <Button variant="primary" onClick={handleLogin} className="px-6 py-2.5 w-full sm:w-auto">
                        Mulai Sekarang
                    </Button>
                    {/* Menghapus mt-1 dan menggantinya dengan manajemen gap flex agar sejajar lurus */}
                    <Button variant="secondary" onClick={() => window.open('https://github/davidkhasbiya/GitGud', '_blank')} className="px-6 py-2.5 text-zinc-500 dark:text-zinc-400 text-sm w-full sm:w-auto">
                        Dokumentasi Proyek
                    </Button>
                </div>
            </main>

            {/* 2. ALUR BELAJAR SECTION */}
            <section id="kurikulum" className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-950/20 py-20 transition-colors">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-12">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-[#39FF14]">Learning Path</span>
                        <h2 className="text-2xl font-bold mt-2">Kurikulum Berbasis Kompetensi</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Pilih jalur spesialisasi kamu. Kurikulum dirancang dari fundamental hingga siap rilis.</p>
                    </div>

                    {/* Dioptimasi: sm:grid-cols-2 lg:grid-cols-3 agar transisi tablet ke desktop rapi */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="border border-zinc-200 bg-white dark:border-zinc-900 dark:bg-[#121214]/60 p-6 rounded-lg flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                            <div>
                                <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">PATH 01</div>
                                <h3 className="text-base font-semibold mb-2">Frontend Engineer Core</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                                    Menguasai manajemen state, arsitektur komponen React modern, serta optimasi performa render pada client-side.
                                </p>
                            </div>
                            <div className="text-xs text-emerald-600 dark:text-[#39FF14] font-mono pt-4 border-t border-zinc-100 dark:border-zinc-900/60">
                                12 Modul Pembelajaran
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-zinc-200 bg-white dark:border-zinc-900 dark:bg-[#121214]/60 p-6 rounded-lg flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                            <div>
                                <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">PATH 02</div>
                                <h3 className="text-base font-semibold mb-2">Backend Architecture (Go)</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                                    Membangun RESTful API yang scalable, manajemen konkurensi, integrasi database, dan pembuatan middleware keamanan.
                                </p>
                            </div>
                            <div className="text-xs text-emerald-600 dark:text-[#39FF14] font-mono pt-4 border-t border-zinc-100 dark:border-zinc-900/60">
                                15 Modul Pembelajaran
                            </div>
                        </div>

                        {/* Card 3 - Ditambahkan col-span pas di layar tablet biar ga pincang sebelah */}
                        <div className="border border-zinc-200 bg-white dark:border-zinc-900 dark:bg-[#121214]/60 p-6 rounded-lg flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors sm:col-span-2 lg:col-span-1">
                            <div>
                                <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">PATH 03</div>
                                <h3 className="text-base font-semibold mb-2">Cloud Native & DevOps</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-4">
                                    Implementasi containerisasi Docker, otomatisasi CI/CD via GitHub Actions, dan deployment mikroservis ke Google Cloud Run.
                                </p>
                            </div>
                            <div className="text-xs text-emerald-600 dark:text-[#39FF14] font-mono pt-4 border-t border-zinc-100 dark:border-zinc-900/60">
                                10 Modul Pembelajaran
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FITUR PLATFORM SECTION */}
            <section id="fitur" className="border-t border-zinc-200 dark:border-zinc-900 py-20 transition-colors">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Engine Sistem</span>
                            <h2 className="text-2xl font-bold mt-2 mb-4">Metode Pembelajaran Aktif</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                                Kami meninggalkan metode membaca pasif. Di GitGud, Anda berinteraksi langsung dengan berkas repositori tiruan untuk menyelesaikan studi kasus nyata secara langsung dari browser Anda.
                            </p>

                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start space-x-3">
                                    <span className="text-emerald-600 dark:text-[#39FF14] font-mono">✓</span>
                                    <span className="text-zinc-600 dark:text-zinc-300"><strong className="text-zinc-900 dark:text-white">Kompilasi Instan:</strong> Validasi kode backend Anda dalam hitungan detik.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-emerald-600 dark:text-[#39FF14] font-mono">✓</span>
                                    <span className="text-zinc-600 dark:text-zinc-300"><strong className="text-zinc-900 dark:text-white">Analisis Gemini AI:</strong> Dapatkan ulasan refactoring kode yang objektif dan efisien.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Visual Terminal */}
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs shadow-2xl">
                            <div className="flex space-x-1.5 mb-4 border-b border-zinc-900 pb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                                <span className="text-zinc-600 pl-2 text-[10px]">gitgud-compiler v1.0</span>
                            </div>
                            <div className="space-y-1.5 text-zinc-400">
                                <p className="text-zinc-600">// Menjalankan pengujian fungsional backend...</p>
                                <p>$ go test ./services/auth_test.go</p>
                                <p className="text-amber-500">➔ RUN   TestFirebaseVerification</p>
                                <p className="text-[#39FF14]">✔ PASS: TestFirebaseVerification (0.42s)</p>
                                <p className="text-white mt-2">Status: <span className="bg-emerald-950 text-[#39FF14] px-1.5 py-0.5 rounded text-[10px]">SUCCESS</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BOTTOM CALL TO ACTION */}
            <section className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-gradient-to-b dark:from-[#121214] dark:to-zinc-950 py-20 text-center transition-colors">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4">Siap Menguji Kemampuan Kode Anda?</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 max-w-xl mx-auto">
                        Gunakan akun Google Anda untuk melakukan sinkronisasi progress belajar dan mulai tantangan pemrograman sekarang.
                    </p>
                    <Button variant="primary" onClick={handleLogin} className="px-8 py-3 w-full sm:w-auto">
                        Sign In dengan Google
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}