import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  //hook into a stream of events that way we can trigger based on specific changes
  onAuthStateChanged,
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

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
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
        ...additionalInfo
      })
    } catch (error) {
      console.log('error', error.message)
    }
  }
  console.log(userDocRef)
  return userDocRef
  
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

//it takes 2 parameters auth, callback you want to call every time state auth changes
//this one will always be listening and you have to tell it when to stop or it can become a memory leak whenever component unmounts (in user)
export const onAuthStateChangedListender = (callback) => {
  onAuthStateChanged(auth, callback)
}