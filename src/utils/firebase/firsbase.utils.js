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
  apiKey: "AIzaSyAyoge97fPgHD59H37bC9XU67V0E85m5HE",
  authDomain: "purrfect-styles.firebaseapp.com",
  projectId: "purrfect-styles",
  storageBucket: "purrfect-styles.appspot.com",
  messagingSenderId: "245296782558",
  appId: "1:245296782558:web:467f62f3cf96cdff58764f"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

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



