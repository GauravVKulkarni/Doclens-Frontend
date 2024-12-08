// Confirmation.jsx
import React from 'react';

const Confirmation = ({ selectedFields, onSubmit, onBack }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 4: Confirmation</h2>
      <p className="text-sm text-gray-600">Review your selections below:</p>
      <ul className="space-y-2">
        {selectedFields.map((field) => (
          <li key={field} className="text-sm text-gray-700">{field}</li>
        ))}
      </ul>
      <div className="mt-6 flex space-x-4">
        <button onClick={onBack} className="bg-gray-300 text-white px-6 py-2 rounded-md">
          Back
        </button>
        <button onClick={onSubmit} className="bg-green-500 text-white px-6 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
