// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log("import.meta.env", import.meta.env);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f4fb1.firebaseapp.com",
  projectId: "mern-auth-f4fb1",
  storageBucket: "mern-auth-f4fb1.firebasestorage.app",
  messagingSenderId: "552683722097",
  appId: "1:552683722097:web:64becdded866cf2a7112d0",
  measurementId: "G-V786MLFN1E"
};
console.log("firebaseConfig", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
