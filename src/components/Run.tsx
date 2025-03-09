import React from "react";

const Run: React.FC = () => {
    return (
        <div className="w-full bg-white flex justify-center items-center py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-12 md:gap-28">
                <div className="flex justify-center items-center">
                    <img src="/R1.png" alt="First image" className="w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-24 object-contain" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/R2.png" alt="Second image" className="w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-24 object-contain" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/R3.png" alt="Third image" className="w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-24 object-contain" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/R4.png" alt="Fourth image" className="w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-24 object-contain" />
                </div>
                <div className="flex justify-center items-center">
                    <img src="/R5.png" alt="Fifth image" className="w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-24 object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Run;



