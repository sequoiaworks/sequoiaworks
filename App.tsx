import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Philosophy from "./components/Philosophy";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

import LegalModal from "./components/LegalModal";
import PrivacyContent from "./legal/PrivacyContent";
import TermsContent from "./legal/TermsContent";

/* 🔹 Scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <Intro />
    <Services />
    <Portfolio />
    <Philosophy />
    <Testimonials />
    <CTA />
    <Contact />
  </>
);

const App: React.FC = () => {
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Background glow */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        </div>

        {/* Navbar ONCE (correct UX) */}
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>

        <Footer onLegalOpen={setLegal}/>
              {/* Privacy Policy Modal */}
        <LegalModal
          open={legal === "privacy"}
          onClose={() => setLegal(null)}
          title="Privacy Policy"
        >
          <PrivacyContent />
        </LegalModal>

        {/* Terms Modal */}
        <LegalModal
          open={legal === "terms"}
          onClose={() => setLegal(null)}
          title="Terms & Conditions"
        >
          <TermsContent />
        </LegalModal>
      </div>
    </BrowserRouter>
  );
};

export default App;
