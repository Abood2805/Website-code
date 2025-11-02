import React from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ModernHeader } from "./components/ModernHeader";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Faculty } from "./components/Faculty";
import { Timetable } from "./components/Timetable";
import { InfrastructureGallery } from "./components/InfrastructureGallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {
  ScrollProgress,
  BackToTop,
  FloatingMenu,
  useScrollAnimation,
} from "./components/EnhancedFeatures";

export default function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Enhanced Features */}
        <ScrollProgress />
        <BackToTop />
        <FloatingMenu />

        <ModernHeader />
        <main className="relative">
          <Hero />
          <About />
          <Faculty />
          <Timetable />
          <InfrastructureGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}