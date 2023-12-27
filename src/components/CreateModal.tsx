import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CreateModalProps {
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    project: "",
    issueType: "",
    status: "",
    summary: "",
    priceBookpages: "",
    priority: "",
    getComponent: "",
    error: "",
    testedBy: "",
    retestStatus: "",
    additionalField1: "",
    additionalField2: "",
    additionalField3: "",
    description: "",
    team: "",
    assignee: "",
    labels: "",
    fixVersion: "",
    reporter: "",
    attachment: null,
    linkedIssues: "",
    flagged: false,
    createAnotherIssue: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-8 rounded shadow-md max-w-2xl w-full h-[80vh]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Create Issue</h2>
            <button
              onClick={onClose}
              className="text-gray-200 hover:text-gray-700 focus:outline-none"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
          
          {/* Body/Form */}
          <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ flex: "1" }}>
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="mb-4">
                  <label className="block text-sm font-semibold text-gray-200 mb-1">
                    {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}:
                  </label>
                  {key === "description" ? (
                    <textarea
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="border p-2 rounded w-full focus:outline-none focus:border-blue-500 h-32 resize-none"
                    />
                  ) : key === "attachment" ? (
                    <input
                      type="file"
                      name={key}
                      onChange={handleChange}
                      className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                    />
                  ) : key === "flagged" || key === "createAnotherIssue" ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-200">{key}</span>
                    </div>
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
            </form>
          </div>
          
          {/* Footer */}
          <div className="col-span-2 lg:col-span-3 mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none mr-4"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;