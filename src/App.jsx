// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationFormPreview from './pages/ApplicationFormPreview';
import ApplicationInstructions from './pages/ApplicationInstructions';

function App() {
  return (
    <Router>
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
