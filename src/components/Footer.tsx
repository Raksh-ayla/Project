import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-black text-white p-6 md:p-10">

            <div className="flex flex-col md:flex-row justify-start md:gap-x-32 border-b border-gray-700 pb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <MapPin className="text-white" size={24} />
                    <div>
                        <p className="text-green-400">Address:</p>
                        <p className="font-semibold">
                            Department of Design and Manufacturing,<br />
                            Indian Institute Of Science, Bengaluru, Karnataka 560012
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-4 md:mb-0 md:ml-0 lg:ml-28">
                    <Phone className="text-white" size={24} />
                    <div>
                        <p className="text-green-400">Phone:</p>
                        <p className="font-semibold">+91 7206268835</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:ml-0 lg:ml-20">
                    <Mail className="text-white" size={24} />
                    <div>
                        <p className="text-green-400">Email:</p>
                        <p className="font-semibold">dcoe@fsid-iisc.in</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">

                <div>
                    <img src="foot.png" alt="logo" className="w-44 h-12 mb-2" />
                    <p className="text-gray-400 mt-6">
                        The Indian Institute of Science (IISc) is India’s premier research
                        institution, renowned for its cutting-edge advancements in science,
                        engineering, and technology.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Our Modules:</h2>
                    <ul className="text-gray-400 mt-2">
                        <li>➤ Industry 4.0</li>
                        <li>➤ Mechanical Prototyping</li>
                        <li>➤ Electrical Prototyping</li>
                        <li>➤ Design Thinking</li>
                        <li>➤ Aesthetic & Semantics</li>
                        <li>➤ Ergonomics & Human Factors</li>
                        <li>➤ Design Prototyping</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Gallery</h2>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F1.png" alt="Gallery 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F2.png" alt="Gallery 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F3.png" alt="Gallery 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F4.png" alt="Gallery 4" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F5.png" alt="Gallery 5" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-md overflow-hidden">
                            <img src="/F6.png" alt="Gallery 6" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Subscribe</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full mt-2 p-2 rounded-md text-black"
                    />
                    <button className="w-full mt-2 p-2 bg-green-500 text-white rounded-md">
                        SUBSCRIBE NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;




