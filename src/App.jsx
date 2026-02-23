import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import Preloader from './components/common/Preloader';
import { AnimatePresence } from 'framer-motion';

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

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <ScrollToTop />
      <div className={`relative flex flex-col min-h-screen font-sans selection:bg-arch-light-brown selection:text-arch-black bg-arch-gray text-arch-black`}>
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/home-b" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/interiors" element={<Interiors />} />
            <Route path="/project/projects-a" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

export default App;
