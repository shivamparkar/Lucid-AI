import "./singUp.css";

import { SignUp } from "@clerk/clerk-react";

const SingUpPage = () => {
  return (
    <div className="singUp">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default SingUpPage;
