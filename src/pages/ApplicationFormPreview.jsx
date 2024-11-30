// pages/ApplicationFormPreview.jsx
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import BreadcrumbBar from '../components/BreadcrumbBar';
import PageHeading from '../components/PageHeading';
import LabelData from '../components/LabelData';

const ApplicationFormPreview = () => {
  const downloadPdf = () => {
    // PDF download link (replace with your actual PDF URL)
    const pdfLink = '/path-to-pdf/application-form.pdf';
    window.open(pdfLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <NavBar />
      <div className="container mx-auto px-6">
        {/* Breadcrumb and Page Title */}
        <BreadcrumbBar />
        <PageHeading heading="Application Form Preview" />

        <div className="bg-white shadow-md rounded-lg p-6 mt-6 space-y-6">
          {/* Data Labels */}
          <div className="space-y-4">
            <LabelData label="Name" data="John Doe" />
            <LabelData label="Email" data="johndoe@example.com" />
            <LabelData label="Phone Number" data="+1 234 567 890" />
            <LabelData label="Position Applied For" data="Scientist 'B'" />
            <LabelData
              label="Application Form"
              data="Download the Application Form"
              isLink={true}
              link="/path-to-pdf/application-form.pdf" // Path to PDF
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <Button label="Apply" onClick={downloadPdf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPreview;
