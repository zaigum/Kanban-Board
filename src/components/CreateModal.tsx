// CreateModal.tsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoClose } from "react-icons/io5";
import { FaUsers } from "react-icons/fa"; // Import FaInfoCircle
import { BiDotsHorizontalRounded } from "react-icons/bi"; // Import BiDotsHorizontalRounded
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
    pricePage: false,
    taxCode: false,
    priceOverride: false,
    createAnother: false, // Initialize createAnother
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex text-white items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 w-full max-w-2xl p-6 rounded-lg max-h-[100vh] overflow-y-auto mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create Issue</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="h-[45rem] overflow-y-auto">
          <p className="text-xs text-gray-400 mt-1 flex justify-between">
            Required fields are marked with an asterisk{" "}
            <button
              type="button"
              className="flex items-center bg-gray-800 p-1 rounded ml-64"
            >
              <span className="text-gray-300 text-sm">Import Issues</span>
            </button>
            <BiDotsHorizontalRounded className="text-white mr-5 mt-2" />
          </p>

          {/* Project */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-white">
              Project
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Project</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
              {/* Add more project options as needed */}
            </select>
          </div>

          {/* Issue Type */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-white">
              Issue Type
            </label>
            <select
              id="issueType"
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Issue Type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              {/* Add more issue type options as needed */}
            </select>
          </div>
          <hr className="mt-4 border-gray-600" />

          {/* Status */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-white">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border p-2 w-60 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Status</option>
              <option value="open">Open</option>
              <option value="inProgress">In Progress</option>
              <option value="resolved">Resolved</option>
              {/* Add more status options as needed */}
            </select>
            <p className="text-xs text-gray-400 mt-1">
              This is the issue inifail upon craetion
            </p>
          </div>

          {/* Summary */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-white">
              Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="border p-2 w-full bg-slate-800 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">PriceBook Pages</label>
            <div className="flex space-x-4">
              {/* Price Page */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pricePage"
                  name="pricePage"
                  checked={formData.pricePage}
                  onChange={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      pricePage: !prevData.pricePage,
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="pricePage" className="text-gray-200">
                  Price Page
                </label>
              </div>

              {/* Tax Code */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="taxCode"
                  name="taxCode"
                  checked={formData.taxCode}
                  onChange={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      taxCode: !prevData.taxCode,
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="taxCode" className="text-gray-200">
                  Tax Code
                </label>
              </div>

              {/* Price Override */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="priceOverride"
                  name="priceOverride"
                  checked={formData.priceOverride}
                  onChange={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      priceOverride: !prevData.priceOverride,
                    }))
                  }
                  className="mr-2"
                />
                <label htmlFor="priceOverride" className="text-gray-200">
                  Price Override
                </label>
              </div>
            </div>
          </div>

          {/* Priority */}
          <div className="mb-4">
            <label htmlFor="priority" className="block text-gray-200">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              {/* Add more priority options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="getComponent" className="block text-gray-200">
              Get Component
            </label>
            <select
              id="getComponent"
              name="getComponent"
              value={formData.getComponent}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Get Component</option>
              <option value="component1">Component 1</option>
              <option value="component2">Component 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Error */}
          <div className="mb-4">
            <label htmlFor="error" className="block text-gray-200">
              Error
            </label>
            <select
              id="error"
              name="error"
              value={formData.error}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Error</option>
              <option value="error1">Error 1</option>
              <option value="error2">Error 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Tested By */}
          <div className="mb-4">
            <label htmlFor="testedBy" className="block text-gray-200">
              Tested By
            </label>
            <select
              id="testedBy"
              name="testedBy"
              value={formData.testedBy}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Tester</option>
              <option value="tester1">Tester 1</option>
              <option value="tester2">Tester 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Retest Status */}
          {/* Retest Status */}
          <div className="mb-4">
            <label htmlFor="retestStatus" className="block text-gray-200">
              Retest Status
            </label>
            <select
              id="retestStatus"
              name="retestStatus"
              value={formData.retestStatus}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Retest Status</option>
              <option value="retest1">Retest 1</option>
              <option value="retest2">Retest 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-200">
              Description
            </label>
            <ReactQuill
              id="description"
              value={formData.description}
              onChange={(value) =>
                setFormData((prevData) => ({ ...prevData, description: value }))
              }
              className=" mr-10 p-2 w-full rounded focus:outline-none focus:border-blue-500"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  ["bold", "italic", "underline", "strike"],
                  ["link", "image", "video"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                ],
              }}
              formats={[
                "bold",
                "italic",
                "underline",
                "strike",
                "list",
                "bullet",
              ]}
            />
            <input
              type="hidden"
              name="description"
              value={formData.description}
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="team" className="block text-gray-200">
              Team
            </label>
            <div className="input-group">
              <FaUsers className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                id="team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                className="pl-10 border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Associates a team with an issue. You can use this field to search
              and filter issues by team.
            </p>
          </div>

          {/* Assignee */}
          <div className="mb-4">
            <label htmlFor="assignee" className="block text-gray-200">
              Assignee
            </label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Labels Dropdown */}
          <div className="mb-4">
            <label htmlFor="labels" className="block text-gray-200">
              Labels
            </label>
            <select
              id="labels"
              name="labels"
              value={formData.labels}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Fix Version Dropdown */}
          <div className="mb-4">
            <label htmlFor="fixVersion" className="block text-gray-200">
              Fix Version
            </label>
            <select
              id="fixVersion"
              name="fixVersion"
              value={formData.fixVersion}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="version1">Version 1</option>
              <option value="version2">Version 2</option>
              <option value="version3">Version 3</option>
              {/* Add more versions as needed */}
            </select>
          </div>

          {/* Reporter */}
          <div className="mb-4">
            <label htmlFor="reporter" className="block text-gray-200">
              Reporter
            </label>
            <input
              type="text"
              id="reporter"
              name="reporter"
              value={formData.reporter}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Attachment */}
          <div className="mb-4">
            <label htmlFor="attachment" className="block text-gray-200">
              Attachment
            </label>
            <input
              type="text"
              id="attachment"
              name="attachment"
              value={formData.attachment}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800	 text-white rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Linked Issues Dropdown */}
          <div className="mb-4">
            <label htmlFor="linkedIssues" className="block text-gray-200">
              Linked Issues
            </label>
            <select
              id="linkedIssues"
              name="linkedIssues"
              value={formData.linkedIssues}
              onChange={handleChange}
              className="border p-2 w-80 bg-slate-800 text-white rounded focus:outline-none focus:border-blue-500"
            >
              <option value="issue1">Issue 1</option>
              <option value="issue2">Issue 2</option>
              <option value="issue3">Issue 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="flagged" className="block text-gray-200">
              Flagged
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="flagged"
                name="flagged"
                checked={formData.flagged}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    flagged: !prevData.flagged,
                  }))
                }
                className="border p-2 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="ml-2 text-gray-200">Impediment</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Allow to flag issue with impediment
            </p>
          </div>
        </form>
        <div className="flex justify-between items-center mt-5">
          {/* Create Another Issue Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="createAnother"
              name="createAnother"
              checked={formData.createAnother}
              onChange={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  createAnother: !prevData.createAnother,
                }))
              }
              className="border p-1 rounded focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="createAnother" className="text-gray-200 ml-1">
              Create Another issue
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none text-sm"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
