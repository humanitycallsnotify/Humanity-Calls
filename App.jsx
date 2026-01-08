import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import RequestDonors from "./pages/RequestDonors";
import PoorNeedy from "./pages/PoorNeedy";
import AnimalRescue from "./pages/AnimalRescue";
import Collaborate from "./pages/Collaborate";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import WallOfFame from "./pages/WallOfFame";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import DonationsMade from "./pages/DonationsMade";
import NotFound from "./pages/NotFound";

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/request-donors" element={<RequestDonors />} />
            <Route path="/poor-needy" element={<PoorNeedy />} />
            <Route path="/animal-rescue" element={<AnimalRescue />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/wall-of-fame" element={<WallOfFame />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/donations-made" element={<DonationsMade />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
