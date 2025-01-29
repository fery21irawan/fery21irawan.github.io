import React, { useEffect, useState, useRef } from "react";
import { emotional, technical } from "../data/skills";
import TechnicalSkills from "./TechnicalSkills";
import EmotionalSkills from "./EmotionalSkills";

function Skills() {
  const [technicalProgress, setTechnicalProgress] = useState([]);
  const [emotionalProgress, setEmotionalProgress] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setTechnicalProgress(technical.map((section) => section.data.map(() => 0)));
    setEmotionalProgress(emotional.map(() => 0));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection("technical");
          startTechnicalProgress();
          startEmotionalProgress();
          observer.disconnect(); // Hentikan observer setelah animasi dimulai
        }
      },
      { threshold: 0.3 } // 30% dari elemen harus terlihat
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTechnicalProgress = () => {
    technical.forEach((section, sectionIndex) => {
      section.data.forEach((item, itemIndex) => {
        setTimeout(() => {
          const interval = setInterval(() => {
            setTechnicalProgress((prev) => {
              const newProgress = [...prev];
              if (newProgress[sectionIndex][itemIndex] < item.percentage) {
                newProgress[sectionIndex][itemIndex] += 1;
              } else {
                clearInterval(interval);
              }
              return newProgress;
            });
          }, 25);
        }, sectionIndex * 200 + itemIndex * 100);
      });
    });
  };

  const startEmotionalProgress = () => {
    emotional.forEach((item, index) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setEmotionalProgress((prev) => {
            const newProgress = [...prev];
            if (newProgress[index] < item.percentage) {
              newProgress[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newProgress;
          });
        }, 25);
      }, index * 200);
    });
  };

  return (
    <div ref={skillsRef}>
      <TechnicalSkills
        technical={technical}
        technicalProgress={technicalProgress}
      />
      <EmotionalSkills
        emotional={emotional}
        emotionalProgress={emotionalProgress}
      />
    </div>
  );
}

export default Skills;
