import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] font-poppins">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default App;
