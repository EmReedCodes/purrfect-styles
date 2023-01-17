import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  
 //if user does not exists (if it comes back true)
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error', error.message)
    }
  }
  console.log(userDocRef)
  return userDocRef
  
}