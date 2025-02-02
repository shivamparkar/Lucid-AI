import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import logo from "../Images/logo.png";
import logotrans from "../Images/logo_transparent.png";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log("import ", import.meta.env);
console.log(PUBLISHABLE_KEY, "PUBLISHABLE_KEY");

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/">
            <img style={{ height: "90px", width: "90px" }} src={logo} alt="" />
            <span>LucidAI </span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
