import { FaClock, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const WorkingHours: React.FC = () => {
    return (
        <div className="w-full bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-6 m-0">
            <div className="flex items-center space-x-2">
                <FaClock className="text-red-500" />
                <span>Working hours: MON-FRI 9am-5pm</span>
            </div>
            <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Bengaluru</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className="font-bold">Let's Connect</span>
                <FaTwitter className="text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
                <FaFacebook className="text-blue-700 cursor-pointer hover:scale-110 transition-transform" />
                <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition-transform" />
                <FaLinkedin className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
            </div>
        </div>
    );
};

export default WorkingHours;






