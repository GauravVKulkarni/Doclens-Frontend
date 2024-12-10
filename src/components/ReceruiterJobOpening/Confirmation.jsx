import React from 'react';

const Confirmation = ({ jobDetails, selectedFields, selectedDocs, onSubmit, onBack }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mb-12 space-y-6">
      <h2 className="text-xl font-semibold">Step 4: Confirmation</h2>
      <p className="text-sm text-gray-600">Review your selections below:</p>
      
      {/* Job Details */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Job Details</h3>
        <ul className="space-y-1">
          <li><strong>Job Title:</strong> {jobDetails.jobTitle}</li>
          <li><strong>Last Date of Application:</strong> {jobDetails.lastDate}</li>
          <li><strong>Job Description:</strong> {jobDetails.jobDescription}</li>
          <li><strong>Pay Level:</strong> {jobDetails.payLevel}</li>
          <li><strong>Job Document:</strong> {jobDetails.jobDocument ? jobDetails.jobDocument.name : 'No document uploaded'}</li>
        </ul>
      </div>

      {/* Application Fields */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Selected Application Fields</h3>
        <ul className="space-y-1">
          {selectedFields.length ? selectedFields.map((field) => (
            <li key={field}><strong>{field}:</strong> Selected</li>
          )) : <li>No fields selected</li>}
        </ul>
      </div>

      {/* Documents */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Selected Documents</h3>
        <ul className="space-y-1">
          {selectedDocs.length ? selectedDocs.map((doc) => (
            <li key={doc}><strong>{doc}:</strong> Selected</li>
          )) : <li>No documents selected</li>}
        </ul>
      </div>

      <div className="mt-6 flex space-x-4">
        <button onClick={onSubmit} className="bg-green-500 text-white px-6 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
