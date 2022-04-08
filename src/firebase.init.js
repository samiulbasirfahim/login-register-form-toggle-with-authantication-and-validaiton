// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCWqMnAmzHSQjYDoO3wdbnr-L_iVcdSPeU",
	authDomain: "simple-firebase-practice-f1fbf.firebaseapp.com",
	projectId: "simple-firebase-practice-f1fbf",
	storageBucket: "simple-firebase-practice-f1fbf.appspot.com",
	messagingSenderId: "324689763857",
	appId: "1:324689763857:web:c166ac874dde7a09591bb0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
