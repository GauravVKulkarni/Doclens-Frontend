// components/BreadcrumbBar.jsx
const BreadcrumbBar = () => {
  return (
    <div className="text-sm text-gray-600 px-6 py-2 bg-gray-100">
      <span className="hover:underline cursor-pointer">Home</span> &gt;{' '}
      <span className="hover:underline cursor-pointer">Careers</span> &gt;{' '}
      <span>Application Form Preview</span>
    </div>
  );
};

export default BreadcrumbBar;
