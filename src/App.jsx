import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationFormPreview from './pages/ApplicationFormPreview';
import ApplicationInstructions from './pages/ApplicationInstructions';
import RecruiterJobOpenings from './pages/RecruiterJobOpenings';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<RecruiterJobOpenings />} />
        <Route path="/application-form-preview" element={<ApplicationFormPreview />} />
        <Route path="/application-instructions" element={<ApplicationInstructions />} />
      </Routes>
    </Router>
  );
}

export default App;
