import React from 'react'
import PersonalDetails from './PersonalDetails';
import UploadDocuments from './UploadDocuments';
import ConfirmApplication from './ConfirmApplication';
import ApplicationStatus from './ApplicationStatus';

const ApplicationForm = () => {
    const goToNextStep = () => {
        setStep((prevStep) => Math.min(prevStep + 1, 5));
      };
    
      const goToPreviousStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
      };
    
      const renderStep = () => {
        switch (step) {
          case 1:
            return <Instructions />;
          case 2:
            return (
              <PersonalDetails />
            );
          case 3:
            return (
              <UploadDocuments />
            );
          case 4:
            return (
              <ConfirmApplication />
            );
            case 5:
            return (
              <ApplicationStatus />
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

export default ApplicationForm