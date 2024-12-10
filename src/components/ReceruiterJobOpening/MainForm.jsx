import React, { useState } from 'react';
import JobDetails from './JobDetails';
import ApplicationFormSetup from './ApplicationFormSetup';
import DocumentUpload from './DocumentUpload';
import Confirmation from './Confirmation';

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    lastDate: '',
    jobDescription: '',
    payLevel: '',
  });
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);

  const fields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'email', label: 'Email Address' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'resume', label: 'Resume Upload' },
  ];

  const docs = [
    { name: 'adhaar', label: 'Adhaar Card' },
    { name: 'pan', label: 'Pan Card' },
    { name: 'resume', label: 'Resume Upload' },
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

  const handleSubmit = () => {
    const allData = {
      jobDetails,
      selectedFields,
      selectedDocs,
    };
    console.log('Form Data as JSON:', JSON.stringify(allData, null, 2));
  };

  const goToNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const goToPreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <JobDetails jobDetails={jobDetails} onJobChange={setJobDetails} />;
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
          <DocumentUpload
            docs={docs}
            selectedDocs={selectedDocs}
            onDocChange={handleDocChange}
          />
        );
      case 4:
        return (
          <Confirmation
            jobDetails={jobDetails}
            selectedFields={selectedFields}
            selectedDocs={selectedDocs}
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
      {renderStep()}
      <div className="my-4">
        <div className="flex justify-between px-4">
          {step > 1 && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={goToPreviousStep}
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={goToNextStep}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainForm;
