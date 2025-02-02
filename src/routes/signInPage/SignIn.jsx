
import { SignIn } from '@clerk/clerk-react'
import './singIn.css'

const SignInPage = () => {
  return (
    <div className='signIn'>
      <SignIn path="/sign-in"  signUpUrl="/sign-up"/>
    </div>
  )
}

export default SignInPage