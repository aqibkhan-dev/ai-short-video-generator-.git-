// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-short-video-generator-73777.firebaseapp.com",
  projectId: "ai-short-video-generator-73777",
  storageBucket: "ai-short-video-generator-73777.firebasestorage.app",
  messagingSenderId: "847155074351",
  appId: "1:847155074351:web:f748b2a70cda43c008bdda",
  measurementId: "G-JR7DN33L0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 