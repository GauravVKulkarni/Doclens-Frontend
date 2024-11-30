// components/FormSection.jsx
const FormSection = ({ title, children }) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {children}
      </div>
    );
  };
  
  export default FormSection;
  