// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7SYbJm7Uz8_FnBE1sq5Go0sx7KJBaiNE",
  authDomain: "pwa-simplon.firebaseapp.com",
  projectId: "pwa-simplon",
  storageBucket: "pwa-simplon.appspot.com",
  messagingSenderId: "141283644008",
  appId: "1:141283644008:web:d5636ca1eba5b3f420e1dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
}
