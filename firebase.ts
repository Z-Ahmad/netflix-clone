// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6HPPdz8L5axp_a2aIOmF63Xct7vd68iM",
  authDomain: "netflix-clone-b1b68.firebaseapp.com",
  projectId: "netflix-clone-b1b68",
  storageBucket: "netflix-clone-b1b68.appspot.com",
  messagingSenderId: "511215524586",
  appId: "1:511215524586:web:1856465091bf34262c1593"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() //check if app is initialized or not
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }