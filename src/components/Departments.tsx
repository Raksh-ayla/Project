const Departments = () => {
    return (
        <div className="bg-cover bg-center h-[85vh]" style={{ backgroundImage: "url('Dback.png')" }}>
            <div className="flex items-center space-x-2 mt-10">
                <img src="./De.png" alt="globe" className="logo" />
            </div>
            <h2 className="text-3xl font-bold text-center -mt-28">
                Browse By <span className="text-green-500">Departments</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 row-gap-4 mt-16 px-4">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-blue-100 p-3 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                            <img src="l0.png" alt="logo" className="w-10 h-12" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Initiative with IISc and <br /> Government of Karnataka
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-red-100 p-3 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10 bg-red-150 rounded-full">
                            <img src="l1.png" alt="logo" className="w-10 h-12" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Supports Indian startups <br /> in market needs, innovation, <br /> and business literacy.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-green-100 p-3 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-280 rounded-full">
                            <img src="l2.png" alt="logo" className="w-10 h-10" />
                        </div>
                        <p className="text-black font-bold text-center">
                            IISc-incubated startups <br /> have a 70% success rate <br /> through strong training and <br /> mentoring.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-yellow-50 p-4 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                            <img src="l3.png" alt="logo" className="w-10 h-10" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Focuses on Industry4.0 for <br /> smart product and <br /> solution design
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-purple-100 p-4 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-20 h-14 rounded-full">
                            <img src="l4.png" alt="logo" className="w-10 h-10" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Experiential Learning
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-pink-100 p-3 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10 bg-red-200 rounded-full">
                            <img src="l5.png" alt="logo" className="w-10 h-12" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Initiative with IISc and <br /> Government of Karnataka
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-20 h-14 rounded-full">
                            <img src="l6.png" alt="logo" className="w-10 h-10" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Certification
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-orange-100 p-4 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-20 h-14 rounded-full">
                            <img src="l7.png" alt="logo" className="w-10 h-10" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Startup support
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-4 bg-teal-100 p-3 rounded-lg shadow-md w-80 h-32">
                        <div className="flex items-center justify-center w-10 h-10  rounded-full">
                            <img src="l8.png" alt="logo" className="w-10 h-12" />
                        </div>
                        <p className="text-black font-bold text-center">
                            Placement support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;





