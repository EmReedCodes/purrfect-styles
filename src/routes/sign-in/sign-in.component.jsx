import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firsbase.utils"
import SignUpForm from "../../components/sign-ups/sign-up-form.component"

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, [])

  //dont use above causes race conditions create a function inside useeffect

  //when needed use belows
  // useEffect(() => {
  //   async function getAuthResponse() {
  //     const response = await getRedirectResult(auth)
  //     console.log(response)
  //   }

  //   getAuthResponse()
  //   .catch(console.error)

  // },[])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
