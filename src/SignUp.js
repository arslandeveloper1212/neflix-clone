import React from 'react'
import "./SignUp.css"
const SignUp = () => {
  return (
    <div>
    <div className='signupScreen'>
    <h1>Sign In</h1>
    <form>
      <input type="email" placeholder='Enter your email' />
      <br></br>
      <input type="password" placeholder='Enter your password' />
      <button type='submit'>Sign In</button>

      <h4>
      <span className="text-grey"> New to Netflix </span>
     <span className="underline_signup"> Sign Up Now </span>
      </h4>
    </form>
  </div>
    </div>
  )
}

export default SignUp
