/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import JumpNav from './components/JumpNav';
import Hero from './components/Hero';
import PollenSection from './components/PollenSection';
import SymptomsSection from './components/SymptomsSection';
import TreatmentsSection from './components/TreatmentsSection';
import DoctorReassurance from './components/DoctorReassurance';
import AllergyShots from './components/AllergyShots';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import AboutPractice from './components/AboutPractice';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal selection:bg-terracotta selection:text-white">
      <Navigation />
      <JumpNav />
      <ScrollToTop />
      <main>
        <Hero />
        <PollenSection />
        <SymptomsSection />
        <TreatmentsSection />
        <AllergyShots />
        <DoctorReassurance />
        <Education />
        <Testimonials />
        <AboutPractice />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
