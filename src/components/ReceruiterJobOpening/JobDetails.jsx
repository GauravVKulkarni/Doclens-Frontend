// JobDetails.jsx
import React from 'react';

const JobDetails = ({ jobDetails, onJobChange }) => {

  const onChange = (e) => {
    onJobChange({
      ...JobDetails, [e.target.name]:e.target.value
    });
    console.log(jobDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 1: Job Details</h2>

      {/* Job Title */}
      <div className="space-y-2">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobDetails.jobTitle}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Last Date of Application */}
      <div className="space-y-2">
        <label htmlFor="lastDate" className="block text-sm font-medium text-gray-700">
          Last Date of Application
        </label>
        <input
          type="date"
          id="lastDate"
          name="lastDate"
          value={jobDetails.lastDate}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Job Description */}
      <div className="space-y-2">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={jobDetails.jobDescription}
          onChange={onChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Pay Level */}
      <div className="space-y-2">
        <label htmlFor="payLevel" className="block text-sm font-medium text-gray-700">
          Pay Level
        </label>
        <select
          id="payLevel"
          name="payLevel"
          value={jobDetails.payLevel}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Pay Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default JobDetails;
