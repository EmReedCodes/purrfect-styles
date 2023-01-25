import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firsbase.utils"
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  
  const { displayName, email, password, confirmPassword } = formFields

  //async since generating user doc with external service
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return alert('Passwords do not match.')
    }
    try {
     const response = await createAuthUserWithEmailAndPassword(email, password)
      console.log(response)
    } catch (error) {
      console.log('user created error', error)
    }
    //confirm that pw matches
    //then see if auth went through with email and password
    //if so create user doc 
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with your email and password.</h1>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />

        <label htmlFor="password">Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />

        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
