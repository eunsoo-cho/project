// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVlvMZEGpXVFUF2T50mmM7fmbTqYDgoU0",
  authDomain: "project-eunsoo.firebaseapp.com",
  projectId: "project-eunsoo",
  storageBucket: "project-eunsoo.appspot.com",
  messagingSenderId: "712789979405",
  appId: "1:712789979405:web:74b4d8306d5c8c68154044",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
