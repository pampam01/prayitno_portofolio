import React from "react";
import { certificates } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";

const Certificates = () => {
  return (
    <>
      <Navbar />
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Certificates
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here are my professional certifications from Dicoding Indonesia and other competition achievements.
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {certificates.map((cert) => (
            <div key={cert.name} className="lg:w-[400px] w-full">
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${cert.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <span className="text-xl" role="img" aria-label="trophy">🏆</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {cert.name}
                </h4>
                <p className="mt-2 text-slate-500 font-semibold">{cert.issuer}</p>
                <p className="mt-1 text-slate-500 text-sm">Issued: {cert.date}</p>

                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    View Certificate
                  </a>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </>
  );
};

export default Certificates;
