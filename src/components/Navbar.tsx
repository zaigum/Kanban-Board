// Navbar.tsx
import React, { useState, useEffect } from "react";
import { FiBell, FiSettings, FiUser } from "react-icons/fi";
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

      {/* Render the modal if open */}
      {isModalOpen && <CreateModal onClose={closeModal} />}
    </nav>
  );
};

export default Navbar;
