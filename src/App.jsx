import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

const App = ({ children }) => {
  return (
    <main className="bg-slate-300/20  h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default App;
