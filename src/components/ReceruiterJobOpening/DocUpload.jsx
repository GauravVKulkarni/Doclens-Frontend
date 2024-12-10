import React from 'react'

const DocUpload = ({ docs, selectedDocs, onDocChange }) => {

    const handleDocChange = (doc) => {
    onDocChange(doc);
};

  return (
    <div className="space-y-6">
      {/* Predefined Fields */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Step 3: Document Selection</h2>
        {docs.map((doc) => (
          <div key={docs.name} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={docs.name}
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
)
}

export default DocUpload