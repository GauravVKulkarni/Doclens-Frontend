// pages/ApplicationInstructions.jsx
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import PageHeading from '../components/PageHeading';
import LabelData from '../components/LabelData';

const ApplicationInstructions = () => {
  const handleDownload = () => {
    // PDF download link (replace with your actual PDF URL)
    const pdfLink = '/path-to-pdf/application-form.pdf';
    window.open(pdfLink, '_blank');
  };

  const handleBack = () => {
    // Logic to navigate back (for now just log a message)
    console.log('Back clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <NavBar />
      <div className="container mx-auto px-6">
        {/* Page Heading */}
        <PageHeading heading="Application Instructions" />

        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
          {/* Instructions List */}
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-blue-600 font-bold text-xl mr-4">1.</div>
              <div>
                <p className="text-gray-700">Please ensure that your application form is filled correctly.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 font-bold text-xl mr-4">2.</div>
              <div>
                <p className="text-gray-700">Only completed applications will be considered for review.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 font-bold text-xl mr-4">3.</div>
              <div>
                <p className="text-gray-700">Upload your latest CV and relevant documents as per the position requirements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 font-bold text-xl mr-4">4.</div>
              <div>
                <p className="text-gray-700">Ensure that all details provided are accurate and up-to-date.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-600 font-bold text-xl mr-4">5.</div>
              <div>
                <p className="text-gray-700">After completing the form, click 'Submit' to finalize your application.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6 space-x-4">
            <Button label="Continue" onClick={handleDownload} />
            <Button label="Back" onClick={handleBack} className="bg-gray-600 hover:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationInstructions;
