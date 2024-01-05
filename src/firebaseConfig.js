// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHdXorH1rxR1y8gkydD4AXvzLLg5Ozq7I",
  authDomain: "bus-ticket-a145e.firebaseapp.com",
  projectId: "bus-ticket-a145e",
  storageBucket: "bus-ticket-a145e.appspot.com",
  messagingSenderId: "985235475797",
  appId: "1:985235475797:web:ac472e9861fde8f49df3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);