import React from "react";
import videoBg from "../assets/btVideo.mp4";
import image1 from "../assets/image1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="Main w-full h-screen bg-cover bg-center relative"
    //   style={{ backgroundImage: `url(${image1})` }}
    >
      <video src={videoBg} className="object-cover object-center h-full w-full absolute z-[-1] " autoPlay muted loop />
      <div className="Top w-full h-[37%] p-7 flex">
        <div className="TopLeft h-full w-1/2 flex flex-col items-start justify-end  ">
          <h1 className="text-4xl text-zinc-400 font-regular">Blockchain Based</h1>
          <h1 className="text-2xl text-zinc-400 font-regular">Certificate Verification</h1>
        </div>
        <div className="TopRight h-full  w-1/2 flex flex-col items-end justify-start">
          <h1 className="text-6xl text-zinc-400 font-regular">
            Revolutionize the world of{" "}
          </h1>
          <h1 className="text-6xl text-zinc-400 font-regular">
            blockchain technology
          </h1>
        </div>
      </div>
      <div className="Bottom w-full h-[63%] flex items-end justify-center">
        <h1 className="mb-16 text-9xl tracking-wide text-white font-medium">
          <b>Cert Verify</b>
        </h1>
      </div>
    </div>
  );
}

export default Home;
