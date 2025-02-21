
import { SignIn } from '@clerk/clerk-react'
import './singIn.css'

const SignInPage = () => {
  return (
    <div className='signIn'>
      <SignIn path="/sign-in"  signUpUrl="/sign-up" forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default SignInPage