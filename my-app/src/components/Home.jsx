import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img 
              src="../assets/MineHome.jpg" 
              alt="Anjula Samaranayake" 
              className="w-1/2 lg:w-1/3 h-auto object-cover rounded-lg shadow-2xl transform transition duration-500 hover:scale-105" 
            />
          </div>

          {/* Right side: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4 lg:p-8">
            <h1 className="text-4xl lg:text-5xl font-thin tracking-tight mb-6">
              Anjula Samaranayake
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent font-medium mb-6">
              Machine Learning Engineer
            </span>
            <h3 className="text-base lg:text-lg text-gray-300 mb-8">
              A passionate Machine Learning Engineer focused on developing cutting-edge solutions that revolutionize industries and shape the future of technology.
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;