import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TripGenerator from './pages/TripGenerator';
import Itinerary from './pages/Itinerary';
import AgadirStory from './pages/AgadirStory';
import SunsetIntelligence from './pages/SunsetIntelligence';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative selection:bg-trippo-gold/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<AgadirStory />} />
            <Route path="/sunset" element={<SunsetIntelligence />} />
            <Route path="/generate" element={<TripGenerator />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
