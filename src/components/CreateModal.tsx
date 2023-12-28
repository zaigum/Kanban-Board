import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

    description: "",
    team: "",
    assignee: "",
    labels: "",
    fixVersion: "",
    reporter: "",
    attachment: "",
    linkedIssues: "",
    flagged: false,
    createAnotherIssue: false,
  });

  const handleChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-900 p-8 rounded shadow-md max-w-2xl w-full h-[90vh]">
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
          <div
            className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ flex: "1" }}
          >
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="mb-4">
                  <label className="block text-sm font-semibold text-gray-200 mb-1">
                    {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}:
                  </label>
                  {key === "issueType" ? (
                    <div className="relative">
                      <select
                        name={key}
                        value={value as string}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:border-blue-500 input-field"
                        style={{
                          width: "375px",
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      >
                        <option value="">Select an option...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  ) : key === "description" ? (
                    <ReactQuill
                      value={formData.description}
                      onChange={(value) => handleChange(key, value)}
                      modules={{
                        toolbar: [
                          ["bold", "italic", "underline", "strike"],
                          [{ header: 1 }, { header: 2 }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          [{ indent: "-1" }, { indent: "+1" }],
                          [{ color: [] }, { background: [] }],
                          ["link", "image"],
                          ["clean"],
                        ],
                      }}
                      placeholder="Enter your description here..."
                      style={{ width: '570px', color: "white", backgroundColor: "#1e293b" }}
                      // Add the custom style for the toolbar container
                      formats={[
                        'header', 'font', 'size',
                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                        'list', 'bullet', 'indent',
                        'link', 'image', 'color', 'background',
                      ]}
                    />
                  ) : key === "attachment" ? (
                    <input
                      type="file"
                      name={key}
                      onChange={(e) => handleChange(key, e.target.files?.[0])}
                      className="border p-2 rounded w-full focus:outline-none focus:border-blue-500"
                      style={{ backgroundColor: "#1e293b" }}
                      placeholder={`Choose ${key.toLowerCase()}...`}
                    />
                  ) : key === "flagged" || key === "createAnotherIssue" ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name={key}
                        checked={value as boolean}
                        onChange={(e) => handleChange(key, e.target.checked)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-200">{key}</span>
                    </div>
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value as string}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="border p-2 rounded w-full focus:outline-none focus:border-blue-500 input-field"
                      style={{
                        width: "375px",
                        color: "white",
                        backgroundColor: "#1e293b",
                      }}
                      placeholder={`Enter ${key.toLowerCase()}...`}
                    />
                  )}
                </div>
              ))}
            </form>
          </div>

          {/* Footer */}
          <div className="col-span-2 lg:col-span-3 mt-6 flex justify-between items-center">
            <div className="flex items-center">
              <label className="text-sm text-gray-200">
                Create Another Issue:
              </label>
              <input
                type="checkbox"
                name="createAnotherIssue"
                checked={formData.createAnotherIssue}
                onChange={(e) =>
                  handleChange("createAnotherIssue", e.target.checked)
                }
                className="ml-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none mr-4"
              >
                Create
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
    </div>
  );
};

export default CreateModal;
