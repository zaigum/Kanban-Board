// Navbar.tsx
import React, { useState } from "react";
import {
  FaCog,
  FaChartBar,
  FaEllipsisV,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { BsStarFill } from "react-icons/bs"; // Import star icon from react-icons/bs

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedWebsite, setSelectedWebsite] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  return (
    <div className="mt-20">
      <a href="/project/sd-01" className=" text-slate-500">
        Project / SD-01
      </a>{" "}
      <h1 className="text-2xl mt-5 font-bold  flex items-center">
        SoundDrop
        <div className="ml-auto flex items-center space-x-2 mr-5">
          <BsStarFill className="text-yellow-500 text-sm" />
          <button
            className="flex items-center space-x-2 px-2 py-2 rounded-md border bg-slate-700 border-gray-600"
            onClick={() => {}}
          >
            <FaEllipsisV className="text-sm" />
          </button>{" "}
          <FaSearch className="text-sm" />
        </div>
      </h1>
      <header className=" mt-5 flex justify-between items-center">
        {/* Left side content with heading */}
        <div className="flex items-center space-x-3 text-black">
          {/* Search Bar */}
          <div className="">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" pl-3 border h-12 border-gray-600 rounded-md w-36 bg-slate-800 focus:outline-none"
            />
          </div>

          {/* Invite People Button */}
          <button
            className="flex items-center space-x-2 px-2 py-2 rounded-full	 border bg-slate-700 border-gray-600"
            onClick={() => {}}
          >
            <FaUserPlus className="text-white" />
          </button>

          {/* Website Dropdown */}
          <div className="hidden md:block ">
            <select
              value={selectedWebsite}
              onChange={(e) => setSelectedWebsite(e.target.value)}
              className="p-2 border border-slate-800 rounded-md w-32 focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
              style={{
                borderRadius: "3.375rem",
                padding: "0.5rem",
                color: "white",
              }} // Custom styles for options
            >
              <option value="">Website</option>
              <option value="website1">
                Website: Home Page : Add Testimonials{" "}
              </option>
            </select>
          </div>

          {/* Types Dropdown */}
          <div className="hidden md:block">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className=" border border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
              style={{
                borderRadius: "0.375rem",
                color: "white",
              }} // Custom styles for options
            >
              <option value="">Types</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>

          {/* Label Dropdown */}
          <div className="hidden md:block">
            <select
              value={selectedLabel}
              onChange={(e) => setSelectedLabel(e.target.value)}
              className="p-2 border border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
              style={{
                borderRadius: "0.375rem",
                padding: "0.5rem",
                color: "white",
              }} // Custom styles for options
            >
              <option value="">Label</option>
              <option value="failed">Failed</option>
              <option value="high">High</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
            </select>
          </div>
        </div>

        {/* Buttons on the right side */}
        <div className="flex items-center space-x-3 text-white">
          <div className="mr-1 text-gray-400">GROUP BY</div>
          <button className="flex items-center space-x-2 px-2 py-1 rounded-md border bg-slate-700 border-gray-600 text-sm">
            None
          </button>
          <button className="flex items-center space-x-2 px-2 py-1 rounded-md border bg-slate-700 border-gray-600 text-sm">
            <div className="mr-1">
              <FaChartBar />
            </div>
            Insights
          </button>
          <button className="flex items-center space-x-2 px-2 py-1 rounded-md border bg-slate-700 border-gray-600 text-sm">
            <div className="mr-1">
              <FaCog />
            </div>
            View Settings
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
