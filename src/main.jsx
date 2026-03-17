import reactDOM from "react-dom/client";

import "./index.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
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
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

reactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
