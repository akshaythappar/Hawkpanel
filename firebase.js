import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD5MNUs6vUbRlWa7RA0FxnaEtFzBifNVTA",
  authDomain: "hawkaerospace-2d35d.firebaseapp.com",
  projectId: "hawkaerospace-2d35d",
  storageBucket: "hawkaerospace-2d35d.appspot.com",
  messagingSenderId: "773740014358",
  appId: "1:773740014358:web:5cbde62fd00077269dbe37",
  measurementId: "G-NW99QNRP4P"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };