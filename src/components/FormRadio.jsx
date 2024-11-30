// components/FormRadio.jsx
const FormRadio = ({ label, name, options }) => {
    return (
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
        <div className="flex space-x-4">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name={name}
                value={option.value}
                className="text-blue-600 focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default FormRadio;
  