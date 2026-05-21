import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCdjmFKFg7lA8k1Kn0bGt5w1UWB4VeCBaY",

  authDomain: "foodhub-449a5.firebaseapp.com",

  projectId: "foodhub-449a5",

  storageBucket: "foodhub-449a5.firebasestorage.app",

  messagingSenderId: "182188563010",

  appId: "1:182188563010:web:b2e913466547be396b6bdb",
  measurementId: "G-BD0WCJP745",

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);