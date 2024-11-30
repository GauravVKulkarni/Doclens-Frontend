const LabelData = ({ label, data }) => {
    return (
      <div className="text-gray-700 text-sm px-6 py-2">
        <span className="font-medium">{label}:</span> {data}
      </div>
    );
  };
  
  export default LabelData;