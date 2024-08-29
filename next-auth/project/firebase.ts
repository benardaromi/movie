import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoZ5beCJA4_gVYYIlGoqKV0DLVtuOzuJI",
  authDomain: "movie-version-2.firebaseapp.com",
  projectId: "movie-version-2",
  storageBucket: "movie-version-2.appspot.com",
  messagingSenderId: "981464245630",
  appId: "1:981464245630:web:cc00b6295a6686b079bf2f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db}