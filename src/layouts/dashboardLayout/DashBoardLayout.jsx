import { Outlet, useNavigate } from "react-router-dom";
import "./dashboard.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const DashBoardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <div>Loading...</div>; 
  return (
    <div className="dashBoard">
      <div className="menu">MENU</div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
