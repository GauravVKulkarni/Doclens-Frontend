// ApplicationFormSetup.jsx
import React, { useState } from 'react';

const DocumentUpload = ({ docs, selectedDocs, onDocChange }) => {
  const [customField, setCustomField] = useState({ label: '', type: '' });
  const [customFieldsList, setCustomFieldsList] = useState([]);

  // Handle checkbox field changes
  const handleDocChange = (doc) => {
    onDocChange(doc);
  };

  // Handle custom input field change
  const handleCustomDocChange = (e) => {
    const { name, value } = e.target;
    setCustomDoc((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 3: Documents to be Uploaded</h2>

      {/* Predefined Fields */}
      <div className="space-y-4">
        {docs.map((doc) => (
          <div key={doc.name} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={doc.name}
              checked={selectedDocs.includes(doc.name)}
              onChange={() => handleDocChange(doc.name)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={doc.name} className="text-sm font-medium text-gray-700">
              {doc.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
