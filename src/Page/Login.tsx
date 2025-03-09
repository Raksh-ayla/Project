import React from "react";

const Login: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login/Register</h2>
                <input type="text" placeholder="Email" className="w-full p-2 border rounded mb-3" />
                <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" />
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">Login</button>
            </div>
        </div>
    );
};

export default Login;
