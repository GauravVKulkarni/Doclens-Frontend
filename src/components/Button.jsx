const Button = ({ label, onClick }) => {
    return (
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;