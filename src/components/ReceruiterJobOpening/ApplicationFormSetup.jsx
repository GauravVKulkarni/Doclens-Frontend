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

      {/* Custom Input Fields Section */}
      <div className="border-t border-gray-300 pt-4">
        <h3 className="text-xl font-semibold text-gray-700">Add Custom Input</h3>

        {/* Custom Input Field Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="label" className="block text-sm font-medium text-gray-700">
              Input Field Label
            </label>
            <input
              type="text"
              name="label"
              value={customField.label}
              onChange={handleCustomFieldChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Input Field Type
            </label>
            <select
              name="type"
              value={customField.type}
              onChange={handleCustomFieldChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Input Type</option>
              <option value="text">Text</option>
              <option value="date">Date</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="file">File</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleAddCustomField}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Custom Field
          </button>
        </div>

        {/* Display Added Custom Fields */}
        {customFieldsList.length > 0 && (
          <div className="mt-4 space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Added Custom Fields</h4>
            {customFieldsList.map((field, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`customField-${index}`}
                  checked={selectedFields.includes(field.label)}
                  onChange={() => handleFieldChange(field.label)}
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={`customField-${index}`} className="text-sm text-gray-700">
                  {field.label} ({field.type})
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationFormSetup;
