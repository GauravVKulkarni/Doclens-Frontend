// DocumentUpload.jsx
import React, { useState } from 'react';

const DocumentUpload = ({ onChange, uploadedFiles }) => {
  const [fileInput, setFileInput] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onChange(files);
    setFileInput(files);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Document Upload</h2>
      <p className="text-sm text-gray-600">Upload your documents here (e.g., Resume, Cover Letter).</p>

      <div className="space-y-2">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {/* Display uploaded files */}
      <div className="mt-4 space-y-2">
        {uploadedFiles.length > 0 ? (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-sm text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
