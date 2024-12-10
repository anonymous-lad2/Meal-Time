import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      setIsLoggedIn(true);
      toast.success("Account Created");
      const accountData = { ...formData };
      console.log(accountData);
      navigate("/");
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-y-6 mt-6 p-4 bg-richblack-800 rounded-md shadow-md sm:gap-y-4 sm:p-6"
    >
      {/* Name Fields */}
      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
        <label className="w-full">
          <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
            First Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter First Name"
            onChange={changeHandler}
            value={formData.firstName}
            name="firstName"
            className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>

        <label className="w-full">
          <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
            Last Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Last Name"
            onChange={changeHandler}
            value={formData.lastName}
            name="lastName"
            className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>
      </div>

      {/* Email Field */}
      <label className="w-full">
        <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </label>

      {/* Password Fields */}
      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
        <label className="w-full relative">
          <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
            Create Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showCreatePass ? "text" : "password"}
            required
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
            className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <span
            onClick={() => setShowCreatePass(!showCreatePass)}
            className="absolute right-3 top-[38px] cursor-pointer"
          >
            {showCreatePass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <label className="w-full relative">
          <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
            Confirm Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showConfirmPass ? "text" : "password"}
            required
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
            name="confirmPassword"
            className="bg-richblack-900 rounded-md w-full p-3 text-sm text-richblack-5 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <span
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className="absolute right-3 top-[38px] cursor-pointer"
          >
            {showConfirmPass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-yellow-400 py-2 px-4 rounded-md mt-4 font-medium text-richblack-900 w-full hover:bg-yellow-300 transition-all duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default Signup;
