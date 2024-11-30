// pages/ApplicationForm.jsx
import FormWrapper from '../components/FormWrapper';
import FormSection from '../components/FormSection';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import FormRadio from '../components/FormRadio';
import FormButton from '../components/FormButton';

const ApplicationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const positionOptions = [
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'manager', label: 'Manager' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <FormSection title="Personal Information">
            <FormInput label="Full Name" name="fullName" placeholder="Enter your full name" />
            <FormInput label="Email Address" name="email" type="email" placeholder="Enter your email" />
            <FormInput label="Phone Number" name="phone" placeholder="Enter your phone number" />
          </FormSection>

          {/* Position Details Section */}
          <FormSection title="Position Details">
            <FormSelect label="Position Applied For" name="position" options={positionOptions} />
            <FormRadio label="Gender" name="gender" options={genderOptions} />
          </FormSection>

          {/* Documents Section */}
          <FormSection title="Documents">
            <FormInput label="Upload CV" name="cv" type="file" />
            <FormInput label="Upload Cover Letter" name="coverLetter" type="file" />
          </FormSection>

          {/* Submit Button */}
          <div className="mt-6">
            <FormButton label="Submit Application" />
          </div>
        </form>
      </FormWrapper>
    </div>
  );
};

export default ApplicationForm;
