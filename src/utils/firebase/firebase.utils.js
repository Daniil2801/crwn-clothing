import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtO7NM1G9S-OM9bOwTc0bLXyVG9XFlw8k",
  authDomain: "crwn-clothing-db-6126a.firebaseapp.com",
  projectId: "crwn-clothing-db-6126a",
  storageBucket: "crwn-clothing-db-6126a.firebasestorage.app",
  messagingSenderId: "154069970644",
  appId: "1:154069970644:web:e57f6668a21de6e5179541"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);