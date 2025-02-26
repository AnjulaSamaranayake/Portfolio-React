import React from 'react';

const About = () => {
    return (
        <div className="text-white flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#200F21] via-[#382039] to-[#5A3D5C] shadow-xl mx-0 md:mx-20 rounded-lg p-6 md:p-12 min-h-screen">
            
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-center">
                <img 
                    src="../assets/Mine.jpg" 
                    alt="About Img" 
                    className="w-4/5 md:w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0 md:pl-12">
                <h2 className="text-[#F638DC] text-2xl md:text-4xl font-bold">About</h2>
                <p className="text-[#F638DC] text-md md:text-lg leading-relaxed mt-4">
                    I am a Software Engineer passionate about innovation, artificial intelligence, and solving real-world problems 
                    through technology. With a strong foundation in machine learning, I strive to build intelligent systems that 
                    drive progress and make a meaningful impact on industries worldwide.
                </p>
            </div>

        </div>
    );
};

export default About;
