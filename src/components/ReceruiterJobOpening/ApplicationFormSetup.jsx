// ApplicationFormSetup.jsx
import React, { useState } from 'react';

const ApplicationFormSetup = ({ fields, selectedFields, onFieldChange }) => {
  const [customField, setCustomField] = useState({ label: '', type: '' });
  const [customFieldsList, setCustomFieldsList] = useState([]);

  // Handle checkbox field changes
  const handleFieldChange = (field) => {
    onFieldChange(field);
  };

  // Handle custom input field change
  const handleCustomFieldChange = (e) => {
    const { name, value } = e.target;
    setCustomField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add custom field to the list
  const handleAddCustomField = () => {
    if (customField.label && customField.type) {
      setCustomFieldsList((prev) => [...prev, customField]);
      setCustomField({ label: '', type: '' }); // Clear input after adding
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 2: Application Form Setup</h2>

      {/* Predefined Fields */}
      <div className="space-y-4">
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
