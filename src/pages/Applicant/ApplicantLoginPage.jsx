// pages/ApplicantLoginPage.jsx
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';

const ApplicantLoginPage = () => {
  const navigate = useNavigate();

  // Function to handle login and redirect
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form default submission behavior

    // Perform any login logic here (e.g., API call, validation)
    console.log("Login successful!");

    // Redirect to the LandingPage
    navigate("/LandingPage");
  };

  return (
    <div className="min-h-screen pt-19">
      {/* Navigation Bar */}
      <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:text-blue-700 font-medium">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantLoginPage;