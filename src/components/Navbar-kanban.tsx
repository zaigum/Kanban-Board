// Navbar.tsx
import React, { useState } from "react";
import { FaBan, FaChartLine, FaCog, FaSearch, FaUser, FaTag } from 'react-icons/fa';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search query:", searchQuery);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLabel(event.target.value);
  };

  return (
    <nav className="p-4 mt-20 border-b border-gray-300">
      <h1 className="text-white text-2xl font-bold">SoundDrop</h1>

      <div className="container mx-auto flex justify-between items-center mt-10">
        <div className="flex items-center">
          <div className="ml-4 flex items-center bg-gray-900 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              <FaSearch />
            </button>
          </div>
          <button className="ml-2 text-white flex items-center">
            <FaUser />
            <span className="ml-1">User</span>
          </button>
          <div className="ml-2 flex items-center">
            <FaTag className="text-white" />
            <select
              value={selectedLabel || ""}
              onChange={handleLabelChange}
              className="ml-1 bg-gray-700 text-white px-2 py-1 rounded-md"
            >
              <option value="" disabled>
                Label
              </option>
              <option value="label1">Label 1</option>
              <option value="label2">Label 2</option>
              <option value="label3">Label 3</option>
            </select>
          </div>
          <div className="ml-2 flex items-center">
            <FaTag className="text-white" />
            <select
              value={selectedType || ""}
              onChange={handleTypeChange}
              className="ml-1 bg-gray-700 text-white px-2 py-1 rounded-md"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-white flex items-center bg-gray-900 rounded-md px-4 py-2">
            <FaBan />
            <span className="ml-1">None</span>
          </button>
          <button className="text-white flex items-center bg-gray-900 rounded-md px-4 py-2">
            <FaChartLine />
            <span className="ml-1">Insights</span>
          </button>
          <button className="text-white flex items-center bg-gray-900 rounded-md px-4 py-2">
            <FaCog />
            <span className="ml-1">View Settings</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;