// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqCN78tAihKNFLtU727KeEiHBvziYZ6X4",
  authDomain: "books-16aac.firebaseapp.com",
  projectId: "books-16aac",
  storageBucket: "books-16aac.appspot.com",
  messagingSenderId: "939767074219",
  appId: "1:939767074219:web:621e51669f0e724e89d6ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app