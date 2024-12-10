import React, { useState } from 'react';
import JobDetails from './JobDetails';
import ApplicationFormSetup from './ApplicationFormSetup';
// import DocumentUpload from './DocumentUpload';
import Confirmation from './Confirmation';
import DocUpload from './DocUpload';

const MainForm = () => {
  const [step, setStep] = useState(1); // Manage current step
  const [jobDetails, setJobDetails] = useState({ jobTitle: '', company: '' });
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const fields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'email', label: 'Email Address' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'resume', label: 'Resume Upload' },
  ];

  const docs = [
    { name: 'Adhaar', label: 'Adhaar Card' },
    { name: 'pan', label: 'Pan Card' },
    { name: 'resume', label: 'Resume' },
  ];

  const handleFieldChange = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((item) => item !== field) : [...prev, field]
    );
  };

  const handleDocChange = (doc) => {
    setSelectedDocs((prev) =>
      prev.includes(doc) ? prev.filter((item) => item !== doc) : [...prev, doc]
    );
  };

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log()
  };

  // Functions to navigate between steps
  const goToNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4)); // Ensure step doesn't exceed 4
  };

  const goToPreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1)); // Ensure step doesn't go below 1
  };

  // Conditional rendering based on current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <JobDetails jobDetails={jobDetails} onChange={setJobDetails} />;
      case 2:
        return (
          <ApplicationFormSetup
            fields={fields}
            selectedFields={selectedFields}
            onFieldChange={handleFieldChange}
          />
        );
        case 3:
        return (
          <DocUpload
            docs={docs}
            selectedDocs={selectedDocs}
            onDocChange={handleDocChange}
          />
        );
      case 4:
        return (
          <Confirmation
            selectedFields={selectedFields}
            onSubmit={handleSubmit}
            onBack={goToPreviousStep}
          />
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-24">
      <h1 className="text-3xl font-semibold">Job Opening Creation</h1>
      {/* Render current step */}
      {renderStep()}
      {/* Step indicator and navigation */}
      <div className="my-4">
        <div className="flex justify-between px-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={goToPreviousStep}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={goToNextStep}
            disabled={step === 4}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainForm;