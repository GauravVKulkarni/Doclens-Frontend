// pages/AdminLoginPage.jsx
import NavBar from '../components/NavBar';
import BreadcrumbBar from '../components/BreadcrumbBar';
import LoginCard from '../components/LoginCard';

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-19">
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Breadcrumb Section */}
      <BreadcrumbBar pageName="Admin Login" />
      
      {/* Login Card Section */}
      <div className="container mx-auto px-6 flex justify-center items-center min-h-[70vh]">
        <LoginCard />
      </div>
    </div>
  );
};

export default AdminLoginPage;