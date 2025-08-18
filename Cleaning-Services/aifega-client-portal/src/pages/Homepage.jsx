import React from "react";
import hero_img from "../assets/hero_img.jpeg";

export default function Homepage() {
  return (
    <>
      <div>
        <div className="relative z-10 flex gap-12 flex-col h-lvh w-full justify-center items-start px-4">
          <h4 className="text-5xl">
            Sparkling <span className="text-highlights font-bold">Clean</span> Homes
          </h4>
          <p className="text-xl">Experience the difference with Aifega's premium cleaning services. We deliver spotless results for your home and business with eco-friendly solutions and professional care.</p>
          <button className="bg-purple rounded-lg px-2 py-4 text-">Get a Quote</button>
        </div>
        <img
          src={hero_img}
          className="z-1 absolute inset-0 w-full h-full object-cover brightness-50 blur-[1px]"
          alt="hero"
        />
      </div>
    </>
  );
}
