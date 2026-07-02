import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
    const baseStyle = "font-medium text-sm transition-all duration-200 tracking-wide rounded-md text-center";

    const variants = {
        // Hijau neon disederhanakan tanpa shadow berlebih, ukuran disesuaikan standar industri
        primary: "bg-[#39FF14] text-black hover:bg-[#2ee60f] px-4 py-2 font-semibold",
        // Sekunder menggunakan border tipis abu-abu khas dashboard modern
        secondary: "bg-transparent text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white px-4 py-2",
        text: "text-zinc-400 hover:text-white transition-colors"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}