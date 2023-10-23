import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4MIIFVlKPU_eCCnuQqMMQMJVVnTs3254",
  authDomain: "tcc-bsi.firebaseapp.com",
  databaseURL: "https://tcc-bsi-default-rtdb.firebaseio.com",
  projectId: "tcc-bsi",
  storageBucket: "tcc-bsi.appspot.com",
  messagingSenderId: "698327480667",
  appId: "1:698327480667:web:593aa7cffffd9077ea427e",
  measurementId: "G-NTKY4F3ZGM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };