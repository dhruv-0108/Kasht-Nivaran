import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA90YIokQ8viots_CqFtywnWIlPAprkHuE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "kasht-nivaran-devotees.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "kasht-nivaran-devotees",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "kasht-nivaran-devotees.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1059954543838",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1059954543838:web:d513461ac15c584fd7c64f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
