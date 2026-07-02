import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard'; // Pastikan kamu sudah membuat file Dashboard.jsx di folder pages

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Ambil preferensi tema dari localStorage saat pertama kali load
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Jika belum ada, default ke dark
  });

  // Listener untuk mengecek sesi login Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Efek untuk sinkronisasi class HTML dan menyimpan ke localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Simpan status terbaru
  }, [theme]);

  // Fungsi toggle yang akan dioper ke komponen anak
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center font-mono text-xs bg-zinc-950 text-white">
        Memuat Sesi gitgud...
      </div>
    );
  }

  // SYSTEM SWITCHING: Otomatis memisah antara user login dan guest
  return user ? (
    <Dashboard user={user} theme={theme} onToggleTheme={toggleTheme} />
  ) : (
    <LandingPage theme={theme} onToggleTheme={toggleTheme} />
  );
}