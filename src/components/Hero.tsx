import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-lime-100 text-black p-4 md:p-10 relative mb-0.5">
            <div className="max-w-lg">
                <div className="flex items-center space-x-2">
                    <img src="fi1.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
                    <img src="fi2.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-16" />
                    <div>
                        <h2 className="text-green-600 font-bold text-xs md:text-sm">DEPARTMENT OF</h2>
                        <h1 className="text-black font-bold text-base md:text-lg">DESIGN AND MANUFACTURING</h1>
                        <h3 className="text-gray-400 font-semibold text-sm md:text-base">INDIAN INSTITUTE OF SCIENCE</h3>
                    </div>
                </div>
                <h1 className="text-xl md:text-3xl font-bold mt-4">
                    Welcome To The <span className="text-black">Centre Of Excellence In Design</span> <span className="text-black font-bold">D-</span><span className="text-green-600 font-bold">Co</span><span className="text-red-500 font-bold">E</span>
                </h1>
                <p className="text-black-500 mt-4 text-sm md:text-base">
                    A premier initiative by IISC dedicated to equipping students and professionals with the skills and knowledge to thrive in a rapidly evolving design industry.
                </p>

                <div className="mt-6">
                    <p className="flex items-center text-blue-600"><span className="mr-2">🌐</span>Google Reviews</p>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="text-green-500 text-xs md:text-sm">4.5/5</span>
                </div>

                <div className="mt-4">
                    <p className="flex items-center text-blue-600"><span className="mr-2">🎓</span>Happy Student</p>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="text-green-500 text-xs md:text-sm">4.0/5</span>
                </div>

                <button className="mt-6 px-4 md:px-6 py-2 bg-green-500 text-white font-bold rounded-full flex items-center">
                    View More <span className="ml-2">→</span>
                </button>
            </div>
            <div className="relative flex items-center justify-end w-full md:w-auto mt-6 md:mt-0">
                <div className="absolute left-0 w-1/2 h-5/6 bg-no-repeat bg-left bg-cover hidden md:block" style={{ backgroundImage: "url('./bg1.png')", transform: "translateY(33px)" }} />
                <img src="./fi3.png" alt="Student" className="relative z-10 max-w-sm md:max-w-md rounded-lg ml-auto -translate-y-5" />
                <div className="absolute right-10 w-1/2 h-5/6 bg-no-repeat bg-right bg-cover hidden md:block" style={{ backgroundImage: "url('./bg2.png')", transform: "translateY(32px)" }} />

                {/* Mobile Background Images */}
                <div className="absolute inset-0 bg-no-repeat bg-center bg-contain md:hidden" style={{ backgroundImage: "url('./bg1.png')" }} />
                <div className="absolute inset-0 bg-no-repeat bg-center bg-contain md:hidden" style={{ backgroundImage: "url('./bg2.png')" }} />
            </div>
        </div>
    );
};

export default Hero;