import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6j5oubawIQfpJSzqN_KTk8qoujRbd4KM",
  authDomain: "sdn-company.firebaseapp.com",
  projectId: "sdn-company",
  storageBucket: "sdn-company.appspot.com",
  messagingSenderId: "20813884094",
  appId: "1:20813884094:web:99ce1aff4d849c491d4cef",
  measurementId: "G-ST1YTNE42J",
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);