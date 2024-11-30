// components/FormButton.jsx
const FormButton = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {label}
      </button>
    );
  };
  
  export default FormButton;
  