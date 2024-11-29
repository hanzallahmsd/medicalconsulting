// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landingpage'; 
import ServicePage from './Pages/ServicePage';
import QuestionnaireViewer from "./Components/QuestionareViewer";
import BookingPage from './Pages/BookingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as default route */}
        <Route path="/services" element={<ServicePage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/view-response/:id" element={<QuestionnaireViewer />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
