// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA--WYIPIyrTPFcx-j6jaemu_9TRbUKIY",
  authDomain: "time-again.firebaseapp.com",
  databaseURL: "https://time-again-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "time-again",
  storageBucket: "time-again.appspot.com",
  messagingSenderId: "620674562007",
  appId: "1:620674562007:web:8bf49441bb7a9526ac7d92",
  measurementId: "G-7KL1CKCCXH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
