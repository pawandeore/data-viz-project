// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB44zqaGO0HNd2GrR6wg-nSmyJ9UPqZOqQ",
    authDomain: "auth-23943.firebaseapp.com",
    projectId: "auth-23943",
    storageBucket: "auth-23943.firebasestorage.app",
    messagingSenderId: "1031276381784",
    appId: "1:1031276381784:web:4d3de8641a1af2266fac2d",
    measurementId: "G-4JYWZ15L2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);