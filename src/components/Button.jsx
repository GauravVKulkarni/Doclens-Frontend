// components/Button.jsx
const Button = ({ label, onClick, className = '' }) => {
  return (
    <button
      className={`bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
