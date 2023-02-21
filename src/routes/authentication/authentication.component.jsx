import SignUpForm from "../../components/sign-ups/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './styles/authentication.styles.scss'
const Authenication = () => {
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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authenication
