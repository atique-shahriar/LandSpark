import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider";
import DetailsEstate from "./components/DetailsEstate";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Root from "./components/Root";
import Service from "./components/Service";
import UpdateProfile from "./components/UpdateProfile";
import Contact from "./Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },

      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <DetailsEstate></DetailsEstate>
          </PrivateRoute>
        ),
        loader: () => fetch("../estates.json"),
      },
      {
        path: "/service",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
