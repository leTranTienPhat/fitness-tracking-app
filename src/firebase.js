import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fitness-tracking-app-41af1.firebaseapp.com",
  projectId: "fitness-tracking-app-41af1",
  storageBucket: "fitness-tracking-app-41af1.appspot.com",
  messagingSenderId: "307738066149",
  appId: "1:307738066149:web:6de80fd9d8a32b59d9280c",
  measurementId: "G-L13W55F4LF"
};
console.log(process.env)

console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);