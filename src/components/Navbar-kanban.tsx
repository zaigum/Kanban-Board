// Navbar.tsx
import { useState } from "react";
import { FaBan, FaChartLine, FaCog, FaSearch, FaUser } from 'react-icons/fa';
import Select from "react-select";

const labelOptions = [
  { value: "failed", label: "Failed" },
  { value: "high", label: "High" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
];

const typeOptions = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
  { value: "type3", label: "Type 3" },
];

const websiteOptions = [
  { value: "website1", label: "Website 1" },
  { value: "website2", label: "Website 2" },
  { value: "website3", label: "Website 3" },
];

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: "#XXXXXX",
    border: state.isFocused ? "2px solid #XXXXXX" : "2px solid #2D3748",
    boxShadow: state.isFocused ? "0 0 0 2px #4A5568" : "none",
    color: "#fff",
    borderRadius: "8px",
    transition: "border-color 0.2s, box-shadow 0.2s",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#1A202C" : "#2D3748",
    padding: "10px",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#4A5568",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#A0AEC0",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    color: "#A0AEC0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedLabel, setSelectedLabel] = useState<any>(null);
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="p-4 mt-20">
      <h1 className="text-white text-2xl font-bold">SoundDrop</h1>

      <div className="container mx-auto flex justify-between items-center mt-10">
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white outline-none border border-gray-400 rounded px-3 py-2 pr-10 focus:outline-none focus:border-gray-500 transition-all duration-300"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <FaSearch />
            </button>
          </div>
          <button className="text-white flex items-center bg-gray-900 rounded-full px-2 py-2">
            <FaUser />
           </button>
          <div className="flex items-center">
            <Select
              value={selectedLabel}
              onChange={(selectedOption) => setSelectedLabel(selectedOption)}
              options={labelOptions}
              placeholder="Label"
              styles={customStyles}
            />
          </div>
          <div className="flex items-center">
            <Select
              value={selectedType}
              onChange={(selectedOption) => setSelectedType(selectedOption)}
              options={typeOptions}
              placeholder="Type"
              styles={customStyles}
            />
          </div>
          <div className="flex items-center">
            <Select
              value={selectedWebsite}
              onChange={(selectedOption) => setSelectedWebsite(selectedOption)}
              options={websiteOptions}
              placeholder="Website"
              styles={customStyles}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
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