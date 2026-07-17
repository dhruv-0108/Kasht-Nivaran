import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjjRe7TnDHeWYbFxtb1-XON0gDY1dHvf4",
  authDomain: "sadhana-mandala-d873f.firebaseapp.com",
  projectId: "sadhana-mandala-d873f",
  storageBucket: "sadhana-mandala-d873f.firebasestorage.app",
  messagingSenderId: "434206412815",
  appId: "1:434206412815:web:e2be6b79ed1612316ad37a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
