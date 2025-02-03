import React, { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import "aos/dist/aos.css";
import AOS from "aos";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Profile from "./components/Profile";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import WorkList from "./components/WorkList";

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
          <div className="flex justify-end ">
            <div className="bg-base-200 flex justify-center items-center p-2 rounded z-[1000]">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="w-full min-h-screen bg-base-200">
        <section id="hero">
          <Hero />
        </section>
        <div className="container mx-auto lg:w-1/2">
          <Section id="profile" title="Profile" data-aos="fade-up">
            <Profile />
          </Section>
          <Section id="skills" title="Skills" data-aos="fade-up">
            <Skills />
          </Section>
          <Section id="certificates" title="Certificates" data-aos="fade-up">
            <Certificate />
          </Section>
          <Section id="work" title="My Work" data-aos="fade-up">
            <WorkList />
          </Section>
        </div>
        <BackToTopButton />
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <Footer />
      </footer>
    </>
  );
}

export default App;
