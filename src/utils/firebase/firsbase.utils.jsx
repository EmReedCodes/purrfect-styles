import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCh7hqE5RLEQaokq9e-KtLKcIeneoUn6io",
  authDomain: "purrfect-pets.firebaseapp.com",
  projectId: "purrfect-pets",
  storageBucket: "purrfect-pets.appspot.com",
  messagingSenderId: "990120675552",
  appId: "1:990120675552:web:29d7134fbf027e1349e885"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
