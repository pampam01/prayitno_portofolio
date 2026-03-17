import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-full min-h-[450px] font-serif text-3xl font-bold text-snow-200">
      <div className="h-full relative z-10 bg-[#d2e13c] bg-gradient-to-b  from-blue-300 to-blue-100 overflow-hidden ">
        <canvas className="absolute top-0 left-0 pointer-events-none z-20"></canvas>
        <div className="p-[20vh_20px_0_20px] text-center leading-8 text-[5vh] ">
          <h1>
            Waduhh Broo <br /> {error.statusText || error.message}
          </h1>
          <Link
            to={"/"}
            className="text-xs font-normal text-current no-underline opacity-60 border-b border-dashed border-gray-400 hover:opacity-100"
          >
            {" "}
            back to home{" "}
          </Link>
        </div>
        <div className="ground">
          <div className="mound">
            <div className="mound_text"></div>
            <div className="mound_spade"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

// <div className="flex justify-center items-center w-full min-h-screen flex-col">
//   <h1 className="text-3xl m-1 px-3 py-2 text-slate-800 font-bold">
//     OOps, Ada sesuatu yang salah
//   </h1>
//   <p className="font-bold text-lg text-red-700 font-sans">
//     {error.statusText || error.message}
//   </p>
// </div>
