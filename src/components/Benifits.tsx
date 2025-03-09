import React from 'react';
import { ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
    return (
        <div className='p-6 bg-black text-center'>
            <h1 className='text-3xl font-bold text-white mb-6 '>Beneficiaries</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-6 bg-black justify-items-center'>
                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b1.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        Undergraduate <br /> Students
                    </h3>
                    <p className='text-gray-600  text-sm text-center'>
                        Engineering / Design / Architecture students
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>

                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b2.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        Engineering Faculty
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        Engineering Faculty from Engineering / Design / Architecture background
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>

                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b3.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        Startups
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        People looking for skill enhancement in design<br /> practices and business processes.
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>


                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b4.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        Coporate
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        Looking to exploring design thinking and <br /> Industry 4.0 tools along with bussiness devlopment process.
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>
                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b5.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        MSMEs
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        Those who want to improve innovation,<br />market fit,and oprational skills to ensure <br /> bussiness success.
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>

                <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-sm'>
                    <div className='w-16 h-16 flex items-center justify-center rounded-full border-dotted border-2 border-blue-500 mb-3'>
                        <img src="b6.png" alt="Icon" />
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 text-center'>
                        Non Engineers
                    </h3>
                    <p className='text-gray-600 text-sm text-center'>
                        Those who want to improve innovation,<br />market fit,and oprational skills to ensure <br /> bussiness success.
                    </p>
                    <button className='mt-3 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition'>
                        View Details <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Benefits;




