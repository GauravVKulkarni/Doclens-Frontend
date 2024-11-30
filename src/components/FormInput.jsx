// components/FormInput.jsx
const FormInput = ({ label, type = "text", name, placeholder }) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  };
  
  export default FormInput;
  