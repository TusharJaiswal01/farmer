import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Resources from './components/Resources';
import DiscussionForum from './components/DiscussionForum';
import CommunityEventPage from './components/CommunityEventPage';
import SikayatKendra from './components/SikayatKendra';

// Import the new component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />

        <Route path="/community-events" element={<CommunityEventPage />} />
        <Route path="/sikayat-kendra" element={<SikayatKendra />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
