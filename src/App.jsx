import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationFormPreview from './pages/ApplicationFormPreview';
import ApplicationInstructions from './pages/ApplicationInstructions';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import RecruiterLoginPage from './pages/Recruiter/RecruiterLoginPage';
import ApplicantLoginPage from './pages/Applicant/ApplicantLoginPage';
import RecruiterJobOpenings from './pages/RecruiterJobOpenings';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        {/* Define the routes for different pages */}
        <Route path="/" element={<ApplicationFormPreview />} />
        <Route path="/application-form-preview" element={<ApplicationFormPreview />} />
        <Route path="/application-instructions" element={<ApplicationInstructions />} />
      </Routes>
    </Router>
  );
}

export default App;
