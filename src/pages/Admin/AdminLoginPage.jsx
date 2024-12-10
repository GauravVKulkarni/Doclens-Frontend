  // pages/AdminLoginPage.jsx
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar';
import LoginCard from '../../components/LoginCard';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (data) => {
    // e.preventDefault()
    // Add your login logic here
    console.log(data)
    navigate("/AdminDashboard"); // Redirect to the dashboard route
  };
  return (
    <div className="min-h-screen bg-white pt-19">
      {/* Navigation Bar */}
      <NavBar />
      {/* Login Card Section */}
      <div className="container mx-auto px-6 flex justify-center items-center min-h-[70vh]">
        <LoginCard handleLogin={handleLogin} route='/AdminDashboard'/>
      </div>
    </div>
  );
};

export default AdminLoginPage;