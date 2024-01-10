// Navbar.tsx
import React, { useState, useEffect } from "react";
import { FiBell, FiSettings, FiUser, FiSearch } from "react-icons/fi"; // Import FiSearch
import CreateModal from "./CreateModal"; // Import the modal component

const Navbar: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 0;
      setIsNavbarVisible(!isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav
      className={`bg-slate-800 p-3 text-slate-200 flex items-center justify-between fixed top-0 w-full transition-all duration-300 ${
        isNavbarVisible ? "" : "opacity-100"
      } border-b-2 border-gray-600`}
    >
      {/* Left side with heading and navigation links */}
      <div className="flex items-center space-x-2">
        {/* Heading */}
        <div className="text-2xl font-bold">Jira Software</div>

        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
              borderRadius: "0.375rem",
              padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value=""> Work</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
               padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value="">Projects</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
              borderRadius: "0.375rem",
              padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value=""> Filters</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
              borderRadius: "0.375rem",
              padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value=""> Dashboard</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
              borderRadius: "0.375rem",
              padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value="">Teams</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="hidden md:block">
          <select
            className="p-2 border cursor-pointer border-slate-800 rounded-md focus:outline-none bg-slate-800 text-white" // Add bg-slate-800 and text-white classes
            style={{
              borderRadius: "0.375rem",
              padding: "0.5rem",
              color: "white",
            }} // Custom styles for options
          >
            <option value="">Apps</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        {/* Create button */}
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>

      {/* Right side with icons, Create button, and Search Input */}
      <div className="flex items-center space-x-4">
        {/* Search Input with transition effect */}
        <div className="transition-all duration-300 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-8 border border-gray-600 rounded-md w-60 bg-slate-800 focus:outline-none"
          />
        </div>
        {/* Notification Icon */}
        <FiBell />

        {/* Setting Icon */}
        <FiSettings />

        {/* Account Icon */}
        <FiUser />
      </div>

      {/* Render the modal if open */}
      {isModalOpen && <CreateModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
