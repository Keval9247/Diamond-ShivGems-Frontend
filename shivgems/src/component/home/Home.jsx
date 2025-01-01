import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200">
            <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold text-blue-800 mb-6">Gemstone Management System</h1>
                <p className="text-lg text-gray-700">
                    Welcome to the Shiv Gems Management System – a comprehensive solution for managing your gemstone inventory, tracking sales, and optimizing your operations. Our platform is designed to streamline your workflow, providing real-time insights and seamless management of all gemstone-related activities.
                </p>
                <ul className="mt-6 text-blue-700 space-y-4">
                    <li className="flex items-center">
                        <span className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                        Efficiently manage gemstone inventory with detailed categorization and stock tracking.
                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                        Monitor sales and generate insightful reports to enhance your business decisions.
                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                        Keep track of customer orders and ensure timely delivery with a streamlined process.
                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                        Access data analytics for a better understanding of trends and performance.
                    </li>
                </ul>
                <div className="mt-8 flex justify-center">
                    <button className="px-6 py-3 text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800" onClick={() => navigate('/auth/login')}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;