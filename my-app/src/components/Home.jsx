import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20 min-h-screen bg-gradient-to-r from-[#200F21] via-[#382039] to-[#5A3D5C]">
      {/* Text Section */}
      <div className="md:w-2/4 text-center md:text-left">
        <h1 className="text-[#F638DC] text-2xl md:text-6xl font-bold leading-normal tracking-tighter">Hey, I'm</h1>
        <h2 className="text-white text-3xl md:text-6xl font-bold leading-normal tracking-tighter">Anjula Samaranayake</h2>
        <p className="text-[#F638DC] text-md md:text-2xl leading-relaxed mt-4">
          A dedicated Machine Learning Engineer with a passion for transforming data into intelligent solutions. 
          I specialize in developing AI-powered systems that drive innovation and create impactful technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
          <button className="text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 transition-all hover:scale-105 font-semibold rounded-3xl bg-[#F638DC] text-[#200F21]">
            View My Projects
          </button>
          <button className="text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 transition-all hover:scale-105 font-semibold rounded-3xl bg-[#F638DC] text-[#200F21]">
            View My Blogs
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
        <img 
          src="../assets/MineHome.jpg" 
          alt="Anjula Samaranayake" 
          className="w-4/5 md:w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
