const NumberedListItem = ({ index, content}) => {
    return (
        <div className="flex items-start">
        <div className="text-custom-blue-2 font-bold text-m mr-4">{index}.</div>
        <div>
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    );
  };
  
  export default NumberedListItem
  ;
  