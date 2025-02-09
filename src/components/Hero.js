import React from 'react';
import '../pages/Home.css'
const Hero = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Bees Soft Solutions</h1>
        <p className="text-lg mt-4">Ideas Into Reality</p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-700">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
