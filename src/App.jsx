import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import FAQPage from './pages/FAQPage';
import SmoothScroll, { useLenis } from './components/effects/SmoothScroll';
import ScrollProgress from './components/effects/ScrollProgress';
import CustomCursor from './components/effects/CustomCursor';

// Service Pages
import ArchitecturalDesign from './pages/services/ArchitecturalDesign';
import Construction from './pages/services/Construction';
import Interiors from './pages/services/Interiors';

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisContext = useLenis();

  useEffect(() => {
    // Use Lenis scrollTo if available, otherwise fall back to window.scrollTo
    if (lenisContext?.scrollTo) {
      lenisContext.scrollTo(0, { immediate: true });
    } else if (lenisContext?.lenis) {
      lenisContext.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisContext]);

  return null;
}

import Brochure from './pages/Brochure';
import ProposalBuilder from './pages/ProposalBuilder';

function AppContent() {
  const location = useLocation();
  const isBrochure = location.pathname === '/brochure' || location.pathname === '/proposal';

  return (
    <>
      <ScrollToTop />
      <div className={`relative flex flex-col min-h-screen font-sans selection:bg-arch-light-brown selection:text-arch-black ${isBrochure ? 'bg-white' : 'bg-arch-gray text-arch-black'}`}>
        {!isBrochure && <ScrollProgress />}
        {/* <CustomCursor /> */}
        {!isBrochure && <Navbar />}
        <main className={`flex-grow relative ${isBrochure ? 'p-0' : ''}`}>
          <Routes>
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/proposal" element={<ProposalBuilder />} />
            <Route path="/" element={<Home />} />
            <Route path="/home/home-b" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/interiors" element={<Interiors />} />
            <Route path="/project/projects-a" element={<Projects />} />
            <Route path="/contact/contact-a" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        {!isBrochure && <Footer />}
      </div >
    </>
  );
}

function App() {
  return (
    <SmoothScroll>
      <Router>
        <AppContent />
      </Router>
    </SmoothScroll>
  );
}

export default App;
