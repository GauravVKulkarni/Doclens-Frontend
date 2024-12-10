import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationFormPreview from './pages/ApplicationFormPreview';
import ApplicationInstructions from './pages/ApplicationInstructions';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import RecruiterLoginPage from './pages/Recruiter/RecruiterLoginPage';
import ApplicantLoginPage from './pages/Applicant/ApplicantLoginPage';
import RecruiterJobOpenings from './pages/RecruiterJobOpenings';
import NavBar from './components/NavBar';
import MainForm from './components/ReceruiterJobOpening/MainForm';
import SignupCard from './components/SignupCard';
import JobOpeningsTable from './components/jobOpeningsTable';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Define the routes for different pages */}
        <Route path="/" element={<AdminLoginPage />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/AdminDashboard" element={<ApplicationFormPreview />} />
        <Route path="/application-instructions" element={<ApplicationInstructions />} />
        <Route path="/job-creation" element={<MainForm />} />
        <Route path="/admin-login" elememt={<AdminLoginPage />} />
        <Route path="/jobs" element={<RecruiterJobOpenings />} />
      </Routes>
    </Router>
  );
}

export default App;
