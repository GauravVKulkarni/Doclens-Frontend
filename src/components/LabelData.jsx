const LabelData = ({ label, data, isLink = false, link }) => {
  return (
    <div className="text-gray-700 text-sm px-6 py-2">
      <span className="font-medium">{label}:</span>{" "}
      {isLink ? (
        <a
          href={link}
          className="text-custom-blue-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      ) : (
        data
      )}
    </div>
  );
};

export default LabelData;
