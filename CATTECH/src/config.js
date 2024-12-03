// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAih0PbPpNPl1BBp9wfXMBndugZHJ-XdwQ",
  authDomain: "cattech-b2fa5.firebaseapp.com",
  databaseURL: "https://cattech-b2fa5-default-rtdb.firebaseio.com",
  projectId: "cattech-b2fa5",
  storageBucket: "cattech-b2fa5.appspot.com",
  messagingSenderId: "267605736026",
  appId: "1:267605736026:web:58c61f4ce511d75201f663",
  measurementId: "G-T5BTX3X9X3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);