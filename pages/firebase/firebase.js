import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBsOgv6u5DPJf4odfRSRKJurwIR8TOTfqo",
    authDomain: "mizu-server.firebaseapp.com",
    projectId: "mizu-server",
    storageBucket: "mizu-server.appspot.com",
    messagingSenderId: "1043057838429",
    appId: "1:1043057838429:web:73d154315b2d94092680b4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
