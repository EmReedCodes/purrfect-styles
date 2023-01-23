import { useState } from "react"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  console.log(formFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = event => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value})
  }

  return (
    <div>
      <h1>Sign up with your email and password.</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="email">Email</label>
              <input
                  type="email"
                  required
                  onChange={handleChange}
                  name="email"
                  value={email} />

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
