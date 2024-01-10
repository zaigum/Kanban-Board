import React, { useState } from "react";
import "../App.css";

import {
  FiCalendar,
  FiList,
  FiClipboard,
  FiFlag,
  FiCode,
  FiTag,
  FiBook,
  FiBookOpen,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"; // Import icons from react-icons
const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <aside
        className={`bg-slate-800 mt-16 text-white p-6 w-64    transition-all duration-300  ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Sidebar</h2>

          <h3 className="text-lg font-semibold mb-2 mt-4">Planning</h3>
          <ul>
            <li className="mt-3">
              <FiCalendar className="inline-block mr-2" />
              <a href="#timeline">Timeline</a>
            </li>
            <li className="mt-3">
              <FiList className="inline-block mr-2" />
              <a href="#backlog">Backlog</a>
            </li>
            <li className="mt-3">
              <FiClipboard className="inline-block mr-2" />
              <a href="#sprint-planning">Sprint Planning</a>
            </li>
          </ul>
          <hr className="mt-4 border-gray-600" />
        </div>

        {/* Development Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 mt-6">Development</h3>
          <ul>
            <li>
              <FiCode className="inline-block mr-2" />
              <a href="#code">Code</a>
            </li>
            <li className="mt-3">
              <FiTag className="inline-block mr-2" />
              <a href="#releases">Releases</a>
            </li>
            <li className="mt-3">
              <FiFlag className="inline-block mr-2" />
              <a href="#bug-tracking">Bug Tracking</a>
            </li>
          </ul>
          <hr className="mt-4 border-gray-600" />
        </div>

        {/* Project Management Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 mt-6">
            Project Management
          </h3>
          <ul>
            <li>
              {" "}
              <FiBook className="inline-block mr-2 " />
              <a href="#project-pages">Project Pages</a>
            </li>
            <li className="mt-3">
              <FiBookOpen className="inline-block mr-2" />
              <a href="#add-shortcut">Add Shortcut</a>
            </li>
            <li className="mt-3">
              <FiSettings className="inline-block mr-2" />
              <a href="#project-setting">Project Setting</a>
            </li>
            <li className="mt-3">
              <FiFlag className="inline-block mr-2" />
              <a href="#risk-management">Risk Management</a>
            </li>
          </ul>
          <hr className="mt-4 border-gray-600" />
        </div>
      </aside>
      {/* Toggle Button */}
      <button
        className="text-white p-2 bg-slate-800 mt-17 border-r-2 border-gray-600  top-0 "
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FiChevronLeft
            size={20}
            className="bg-slate-700 rounded-full left-arrow"
          />
        ) : (
          <FiChevronRight
            size={20}
            className="bg-slate-700 rounded-full right-arrow"
          />
        )}{" "}
      </button>{" "}
    </div>
  );
};

export default Sidebar;
