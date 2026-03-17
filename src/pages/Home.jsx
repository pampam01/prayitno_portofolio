import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Birds, Island, Sky, Plane } from "../models";
import HomeInfo from "../components/HomeInfo";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Navbar from "../components/Navbar";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43]);
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]);
  
  const [planeScale, setPlaneScale] = useState([3, 3, 3]);
  const [planePosition, setPlanePosition] = useState([0, -4, -4]);

  useEffect(() => {
    if (isPlayingMusic) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlayingMusic(false); // Auto fallback pause jika browser menolak autoplay
        });
      }
    } else {
      audioRef.current.pause();
    }
    
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIslandScale([0.9, 0.9, 0.9]);
        setIslandPosition([0, -6.5, -43]);
        
        setPlaneScale([1.5, 1.5, 1.5]);
        setPlanePosition([0, -1.5, 0]);
      } else {
        setIslandScale([1, 1, 1]);
        setIslandPosition([0, -6.5, -43]);
        
        setPlaneScale([3, 3, 3]);
        setPlanePosition([0, -4, -4]);
      }
    };

    handleResize(); // Inisialisasi awal
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center ">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent touch-none ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 2]} // Membatasi pixel ratio agara render HP 3D nya lancar & gampang dirender
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Birds />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        {/* Memperbaiki typo left- dan menambah responsibilitas di mobile */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20">
          <img
            src={isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
