const BreadcrumbBar = ({ pageName }) => {
  return (
    <div className="text-sm text-gray-600 px-16 py-2 bg-gray-100">
      <span className="hover:underline cursor-pointer">Home</span> &gt;{' '}
      <span className="hover:underline cursor-pointer">Careers</span> &gt;{' '}
      <span>{pageName}</span>
    </div>
  );
};

export default BreadcrumbBar;
