// pages/ApplicantLoginPage.jsx
import NavBar from '../../components/NavBar';
import LoginCard from '../../components/LoginCard';

const ApplicantLoginPage = () => {
  return (
    <div className="min-h-screen pt-19">
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Login Card Section */}
      <div className="container mx-auto px-6 flex justify-center items-center min-h-[70vh]">
        <LoginCard />
      </div>
    </div>
  );
};

export default ApplicantLoginPage;