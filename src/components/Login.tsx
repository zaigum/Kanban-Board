import React, { useState } from 'react';

interface LoginInfo {
  email: string;
  password: string;
  username: string;
}

interface LoginProps {
  onLogin: (loginInfo: LoginInfo) => void;
  onToggleSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onToggleSignUp }) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
    username: '',
  });

  const handleLogin = () => {
    // Pass the loginInfo object to onLogin function
    onLogin(loginInfo);
  };
  return (
    <div className="min-h-screen bg-gray-900	 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={loginInfo.email}
            onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={loginInfo.username}
            onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={loginInfo.password}
            onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <button className="text-blue-500" onClick={onToggleSignUp}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
