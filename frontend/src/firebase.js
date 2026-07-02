import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Auth & Provider
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fungsi pembantu untuk Login
export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user; // Mengembalikan data user yang berhasil login
    } catch (error) {
        console.error("Gagal melakukan autentikasi Google:", error);
        throw error;
    }
};