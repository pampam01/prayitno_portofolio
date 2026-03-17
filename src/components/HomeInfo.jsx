import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hallo, saya <span className="font-semibold">Prayitno</span>
      <br />
      Seorang Javascript Programmer
    </h1>
  ),
  2: (
    <InfoBox
      text="saya mahasiswa smester 3 di universitas dinamika bangsa"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="lihat beberapa projek yang pernah saya buat"
      link="/projects"
      btnText="visit my portofolio"
    />
  ),
  4: (
    <InfoBox
      text="ingin membuat projek bersama saya, atau ada sebuah projek yang ingin anda buat?"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
