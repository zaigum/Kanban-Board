// Sidebar.tsx
import React from "react";
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
} from "react-icons/fi"; // Import icons from react-icons

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-slate-800 text-white p-4 w-1/6">
      {/* Add your sidebar content here */}
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>

      {/* Planning Section */}
      <div className="mb-6">
        
        <h3 className="text-lg font-semibold mb-2 mt-10">Planning</h3>
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
            <a href="#board">Board</a>
          </li>
          <li className="mt-3">
            <FiFlag className="inline-block mr-2" />
            <a href="#goals">Goals</a>
          </li>
          <hr className="mt-3 border-t border-slate-600" />

        </ul>
      </div>

      {/* Development Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold my-2 mt-6">Development</h3>
        <ul>
          <li>
            <FiCode className="inline-block mr-2" />
            <a href="#code">Code</a>
          </li>
          <li className="mt-3">
            <FiTag className="inline-block mr-2" />
            <a href="#releases">Releases</a>
          </li>
          {/* Add a line at the bottom of the Releases list */}
          <hr className="mt-3 border-t border-slate-600" />
        </ul>
      </div>

      {/* Project Management Section */}
      <div>
        <h3 className="text-lg font-semibold my-2 mt-6">Project Management</h3>
        <ul>
          <li>
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
          
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
