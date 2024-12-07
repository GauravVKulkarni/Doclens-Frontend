// pages/ApplicationInstructions.jsx
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import PageHeading from '../components/PageHeading';
import LabelData from '../components/LabelData';
import NumberedListItem from '../components/numberedListItem';

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
      <div className="container mx-auto px-6 pt-16">
        {/* Page Heading */}
        <PageHeading heading="Application Instructions" />

        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
          {/* Instructions List */}
          <div className="space-y-1 pl-2">
            <NumberedListItem index="1" content="Please ensure that your application form is filled correctly." />
            <NumberedListItem index="2" content="Only completed applications will be considered for review." />
            <NumberedListItem index="3" content="Upload your latest CV and relevant documents as per the position requirements." />
            <NumberedListItem index="4" content="Ensure that all details provided are accurate and up-to-date." />
            <NumberedListItem index="5" content="After completing the form, click 'Submit' to finalize your application." />
          </div>
          {/* Action Buttons */}
          <div className="flex  justify-end mt-6 space-x-4">
            <Button label="Back" onClick={handleBack} className="bg-gray-600 hover:bg-gray-700" />
            <Button label="Continue" onClick={handleDownload} className="bg-custom-blue-2 hover:bg-custom-blue-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationInstructions;
  