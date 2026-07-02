/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Kita kunci warna tema CodeLingo di sini
                darkBg: "#121214",
                neonGreen: "#39FF14",
                electricCyan: "#00E5FF",
            }
        },
    },
    plugins: [],
}