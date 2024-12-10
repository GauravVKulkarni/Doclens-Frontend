const Button = ({ label, onClick}) => {
  return (
    <button
      className={`bg-custom-blue-2 text-white py-2 px-8 rounded-md hover:custom-blue-1 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
