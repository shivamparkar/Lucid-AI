import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import logo from "../Images/logo.png";
import logotrans from "../Images/logo_transparent.png";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img
              style={{ height: "70px", width: "70px" }}
              src={logo}
              alt=""
            />
            <span>Lucid AI</span>
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
