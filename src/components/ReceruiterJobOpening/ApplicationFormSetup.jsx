// ApplicationFormSetup.jsx
import React, { useState } from 'react';

const ApplicationFormSetup = ({ fields, selectedFields, onFieldChange }) => {
  const [customField, setCustomField] = useState({ label: '', type: '' });
  const [customFieldsList, setCustomFieldsList] = useState([]);

  // Handle checkbox field changes
  const handleFieldChange = (field) => {
    onFieldChange(field);
  };

  return (
    <div className="space-y-6">
      {/* Predefined Fields */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 2: Application Form Setup</h2>
        {fields.map((field) => (
          <div key={field.name} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={field.name}
              checked={selectedFields.includes(field.name)}
              onChange={() => handleFieldChange(field.name)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
              {field.label}
            </label>
          </div>
        ))}
      </div>
</div>
  );
};

export default ApplicationFormSetup;