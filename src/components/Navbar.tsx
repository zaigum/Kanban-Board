// Navbar.tsx
import React from "react";
import { FiBell, FiSettings, FiUser,  } from "react-icons/fi"; // Import icons from react-icons

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-800 p-3 text-slate-200 flex items-center justify-between">
      {/* Left side with heading and navigation links */}
      <div className="flex items-center space-x-4">
        {/* Heading */}
        <div className="text-2xl font-bold">Jira Software</div>

        {/* Navigation Links */}
        <a href="#work" className="cursor-pointer">
          Work
        </a>
        <a href="#projects" className="cursor-pointer">
          Projects
        </a>
        <a href="#filters" className="cursor-pointer">
          Filters
        </a>
        <a href="#dashboard" className="cursor-pointer">
          Dashboard
        </a>
        <a href="#teams" className="cursor-pointer">
          Teams
        </a>

        {/* Dropdown for "Apps" with options */}
        <div className="relative group">
          <a href="#apps" className="cursor-pointer">
            Apps
          </a>
          <div className="absolute hidden bg-white text-black p-2 space-y-2 group-hover:block">
            {/* Dropdown content for "Apps" */}
            <a href="#option1">Option 1</a>
            <a href="#option2">Option 2</a>
            {/* Add more options as needed */}
          </div>
        </div>
      </div>

      {/* Right side with icons, Create button, and Search Input */}
      <div className="flex items-center space-x-4">
        {/* Create button */}
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
           Create
        </button>

        {/* Search Input with transition effect */}
        <div className="transition-all duration-300">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Notification Icon */}
        <FiBell />

        {/* Setting Icon */}
        <FiSettings />

        {/* Account Icon */}
        <FiUser />
      </div>
    </nav>
  );
};

export default Navbar;
