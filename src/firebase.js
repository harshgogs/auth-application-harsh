// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADsL8OK-PwJhOXPZmt6fvjZByIUJZVnpo",
  authDomain: "authentication-d2edc.firebaseapp.com",
  projectId: "authentication-d2edc",
  storageBucket: "authentication-d2edc.appspot.com",
  messagingSenderId: "955595127749",
  appId: "1:955595127749:web:78fef3749c6a594d31e9ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
