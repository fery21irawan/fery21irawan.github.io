import React, { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import "aos/dist/aos.css";
import AOS from "aos";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <header className="fixed top-0 right-0 left-0">
        <div className="p-3">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen bg-base-200">
        <Hero />
        <Section id="skills" title="Skills" data-aos="fade-up">
          <Skills />
        </Section>
        <Section id="certificates" title="Certificates">
          <Certificate />
        </Section>
      </main>
    </>
  );
}

export default App;
