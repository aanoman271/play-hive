// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFYVSZdP-1jjRlGu27xbmrmrmnwoAsN8",
  authDomain: "play-hive-511a0.firebaseapp.com",
  projectId: "play-hive-511a0",
  storageBucket: "play-hive-511a0.firebasestorage.app",
  messagingSenderId: "422554397389",
  appId: "1:422554397389:web:7d1b70002792a700825784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
