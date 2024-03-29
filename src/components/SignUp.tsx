import React, { useState } from "react";
import axios from "axios";

const SignUp: React.FC<{ onToggleLogin: () => void }> = ({ onToggleLogin }) => {
  const [userData, setUserData] = useState({
    UserName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };




  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:5173/api/auth/createUser", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

        console.log("Sign up successful:", response.data);
    } catch (error) {
       console.error("Sign up error:", error);
    }
  };



  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="Username"
              placeholder="Enter your username"
              value={userData.UserName}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              value={userData.Email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Phone number:
            </label>
            <input
              type="text"
              name="PhoneNumber"
              placeholder="Enter your phone number"
              value={userData.PhoneNumber}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Address:
            </label>
            <input
              type="text"
              name="Address"
              placeholder="Enter your address"
              value={userData.Address}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              value={userData.Password}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-500" onClick={onToggleLogin}>
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
