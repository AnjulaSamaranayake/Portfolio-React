import React from 'react';

const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img 
            src="../assets/MineHome.jpg" 
            alt="Home" 
            className="w-2/5 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg" 
          />
        </div>

        {/* Right side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white p-8">
          <h1 className="pb-8 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16">
            Anjula Samaranayake
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent">
            Machine Learning Engineer
          </span>
          <h3 className="mt-4 text-lg lg:text-xl text-white">
            A passionate Machine Learning Engineer focused on developing cutting-edge solutions that revolutionize industries and shape the future of technology.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
