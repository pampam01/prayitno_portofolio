import reactDOM from "react-dom/client";

import "./index.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Projects, Certificates } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "#",
    element: <Navbar />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
    errorElement: <ErrorPage />,
  },
]);

reactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
