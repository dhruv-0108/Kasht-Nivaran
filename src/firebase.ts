import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA90YIokQ8viots_CqFtywnWIlPAprkHuE",
  authDomain: "kasht-nivaran-devotees.firebaseapp.com",
  projectId: "kasht-nivaran-devotees",
  storageBucket: "kasht-nivaran-devotees.firebasestorage.app",
  messagingSenderId: "1059954543838",
  appId: "1:1059954543838:web:d513461ac15c584fd7c64f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
