import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import DataDeletion from './pages/DataDeletion';
import Feedback from './pages/Feedback';
import { useUserJot } from './hooks/useUserJot';
import { useUserJotIdentity } from './hooks/useUserJotIdentity';

function App() {
  useUserJot();
  useUserJotIdentity(null);

  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
