import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import DashBoardPage from "./routes/dashboardPage/DashBoard";
import ChartPage from "./routes/chatPage/ChatPage";
import RootLayout from "./layouts/RootLayout";
import DashBoardLayout from "./layouts/dashboardLayout/DashBoardLayout";

import SignInPage from "./routes/signInPage/SignIn";
import SingUpPage from "./routes/singUpPage/SingUp";


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",  
        element: <SignInPage />
      },
      {
        path: "/sign-up/*",  
        element: <SingUpPage />
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChartPage />,
          },
        ],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




reportWebVitals();
