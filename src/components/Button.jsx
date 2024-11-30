// components/Button.jsx
const Button = ({ label, onClick, className = '' }) => {
  return (
    <button
      className={`bg-custom-blue-2 text-white py-2 px-8 rounded-md hover:custom-blue-1 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
