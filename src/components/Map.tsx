import React from "react";

const Map: React.FC = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-red-400 px-4 md:px-8">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative">

                <div className="w-full md:w-1/2 p-6 md:p-20 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        Get in <span className="text-green-500">Touch</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                    </p>

                    <form className="mt-6 space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone number *"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>How did you find us?</option>
                            </select>
                        </div>

                        <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition">
                            SEND
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-2/3 relative flex items-center justify-center">
                    <div className="absolute right-0 w-1/2 h-full bg-green-300 rounded-tl-xl hidden md:block"></div>
                    <img src="./maa.png" alt="map" className="relative z-10 w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Map;
