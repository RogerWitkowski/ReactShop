import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmZccZP4Wnf3WZSYShOrMphlL3OG2aPzk",
  authDomain: "reactshopdb-904b2.firebaseapp.com",
  projectId: "reactshopdb-904b2",
  storageBucket: "reactshopdb-904b2.appspot.com",
  messagingSenderId: "502871385834",
  appId: "1:502871385834:web:0a35c3d8c0ae64d790d993",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
