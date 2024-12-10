import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const Login = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/");
    }

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-6 mt-6 p-4 bg-richblack-800 rounded-md shadow-md sm:gap-y-4 sm:p-6"
        >
            {/* Email Field */}
            <label className="w-full">
                <p className="text-sm text-richblack-5 mb-2 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </label>

            {/* Password Field */}
            <label className="w-full relative">
                <p className="text-sm text-richblack-5 mb-2 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={changeHandler}
                    name="password"
                    className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={20} fill="#AFB2BF" />
                    )}
                </span>
            </label>

            {/* Forgot Password Link */}
            <Link to="#" className="text-xs mt-1 text-blue-300 self-end hover:underline">
                Forgot Password?
            </Link>

            {/* Sign In Button */}
            <button
                type="submit"
                className="bg-yellow-400 py-2 px-4 rounded-md mt-4 font-medium text-richblack-900 hover:bg-yellow-300 transition-all duration-200"
            >
                Sign In
            </button>
        </form>
    );
};

export default Login;
