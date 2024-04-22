import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAfy_OiccP2cqZOKKpsyycZluR5y9CVvCU",
  authDomain: "time-tracker-1ba48.firebaseapp.com",
  projectId: "time-tracker-1ba48",
  storageBucket: "time-tracker-1ba48.appspot.com",
  messagingSenderId: "823639020155",
  appId: "1:823639020155:web:0edc032869e0aa2d9988de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);
