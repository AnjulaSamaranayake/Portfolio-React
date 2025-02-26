import React from 'react';

const Home = () => {
  return (
    <div className='flex w-full justify-between items-start p-10 md:p20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-white text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hey, I'm Anjula</h1>
        <h2 className='text-white text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Samaranayake</h2>
        <h2 className='text-slate-300 text-xl md:text-3xl font-bold flex leading-normal tracking-tighter'>A passionate Machine Learning Engineer</h2>
        <p className='text-zinc-200 text-sm md:text-2xl flex leading-normal tracking-tight'>
        focused on developing cutting-edge solutions that revolutionize industries and shape the future of technology.
        </p>
        <div className='flex gap-4'>
        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          View My Projects
        </button>
        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          View My Blogs
        </button>
        </div>
      </div>
      <div>
      <img 
              src="../assets/MineHome.jpg" 
              alt="Anjula Samaranayake" 
              className="w-3/5 m-10 left-align-100 rounded-lg shadow-lg"   
            />
      </div>
    </div>
  );
};

export default Home;