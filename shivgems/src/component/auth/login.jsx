import React, { useState } from "react";
import { FaGem } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const DiamondLoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side with illustration and content */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <svg
                        className="absolute right-0 top-1/4 text-white/10"
                        width="404"
                        height="384"
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-white"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="384"
                            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                        />
                    </svg>
                </div>
                <div className="relative z-10 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white/10 p-6 rounded-full mb-6 inline-block shadow-lg">
                        <FaGem className="text-5xl md:text-7xl text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
                        Gemstone Nexus
                    </h1>
                    <p className="text-lg text-blue-100 leading-relaxed mb-4">
                        Simplify gemstone management with our advanced tools.
                    </p>
                    <p className="text-base text-blue-200 mb-4">
                        Track inventory, monitor sales, and manage orders—all in one place.
                    </p>
                    <p className="text-sm text-blue-300">
                        Your trusted partner in gemstone business operations.
                    </p>
                </div>
            </div>

            {/* Right side with login form */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12">
                <div className="max-w-md w-full space-y-6 md:space-y-8">
                    <div className="text-center relative">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
                            <p className="mt-2 text-gray-600">Sign in to your exclusive account</p>
                        </div>
                        {/* <svg width="90" height="90" viewBox="0 0 150 166" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-[-70px]">
                            <path d="M112.15 164.854C110.279 156.346 103.882 156.238 98.0809 155.625C92.5981 155.046 87.1707 154.951 80.9858 152.776C87.5545 150.007 94.1302 147.25 100.691 144.467C117.826 137.2 132.263 126.922 141.855 110.969C165.374 71.8504 131.7 11.189 80.8347 2.26109C49.1279 -3.30409 23.6591 6.20506 2.43142 23.9257C0.946322 25.1654 0.249794 27.2901 0.908636 30.903C3.33195 29.54 5.83335 28.2816 8.16555 26.7973C25.2442 15.9286 44.3287 9.12722 66.6465 9.05152C80.9215 9.00278 95.0197 12.9531 108.093 22.4496C137.271 43.6437 147.157 84.3443 129.306 107.493C116.818 123.685 98.9511 132.505 78.8541 139.671C79.0378 129.269 89.6394 123.744 84.8128 109.694C80.0915 117.859 76.5052 124.509 72.5022 130.848C69.0268 136.352 65.0017 141.443 61.3625 146.828C57.5087 152.53 58.5422 157.076 65.8062 160.031C72.761 162.861 80.27 164.133 87.3782 164.818C95.2975 165.581 103.039 164.909 112.15 164.854Z" fill="black" />
                        </svg> */}

                    </div>


                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                                    placeholder="Enter your email"
                                    autoComplete="false"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 hover:cursor-pointer"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    Remember me
                                </label>
                            </div>
                            {/* <button
                                type="button"
                                className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300"
                            >
                                Forgot password?
                            </button> */}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 text-sm font-medium transform hover:scale-[1.02]"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <p>Protected by enterprise-grade security</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DiamondLoginPage;