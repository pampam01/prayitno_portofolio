import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Project
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            software enginer from Indonesia, spesialis di web development dan
            blockchain development. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sequi nulla obcaecati tenetur et soluta voluptatem
            ad! Quae iure et quia, nostrum voluptatem explicabo aliquid dolor
            praesentium voluptate libero similique quod!
          </p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div key={project.theme} className="lg:w-[400px] w-full">
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>

                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
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
      <Footer />
    </>
  );
};

export default Projects;
