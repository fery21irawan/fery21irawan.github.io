import React, { useEffect, useState } from "react";
import { emotional, technical } from "../data/skills";

function Skills() {
  const [technicalProgress, setTechnicalProgress] = useState([]);
  const [emotionalProgress, setEmotionalProgress] = useState([]);
  const [activeSection, setActiveSection] = useState("technical");

  useEffect(() => {
    // Inisialisasi progress untuk technical dan emotional
    setTechnicalProgress(technical.map((section) => section.data.map(() => 0)));
    setEmotionalProgress(emotional.map(() => 0));
  }, []);

  useEffect(() => {
    // Reset progress setiap kali aktif section berubah
    if (activeSection === "technical") {
      setTechnicalProgress(
        technical.map((section) => section.data.map(() => 0))
      );
      startTechnicalProgress();
    } else if (activeSection === "emotional") {
      setEmotionalProgress(emotional.map(() => 0));
      startEmotionalProgress();
    }
  }, [activeSection]);

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
          }, 10);
        }, sectionIndex * 200 + itemIndex * 100); // Delay per item
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
        }, 10);
      }, index * 200); // Delay per item
    });
  };

  return (
    <>
      <h3
        className="font-bold text-3xl mb-2"
        onMouseEnter={() => setActiveSection("technical")}
      >
        Technical
      </h3>
      <hr />
      {technical.map((data, i) => (
        <div key={i} className="py-2">
          <div className="flex flex-col w-full">
            <div className="divider divider-start">
              <h2 className="text-xl font-semibold">{data.title}</h2>
            </div>
          </div>
          <ul className="text-sm">
            {data.data.map((subdata, j) => (
              <li
                key={j}
                className="mb-2"
                data-aos="fade-up"
                data-aos-delay={j * 150}
              >
                <div className="flex items-center gap-5 justify-between">
                  <div className="flex items-center gap-x-2">
                    {subdata.image ? (
                      <img
                        src={subdata.image}
                        alt={`${subdata.name} logo`}
                        className="w-5"
                      />
                    ) : (
                      ""
                    )}
                    <span>{subdata.name}</span>
                  </div>
                  <progress
                    className="progress progress-primary w-40 lg:w-48"
                    value={technicalProgress[i]?.[j] || 0} // Gunakan nilai progress
                    max="100"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h3
        className="font-bold text-3xl mb-2 mt-2"
        onMouseEnter={() => setActiveSection("emotional")}
      >
        Emotional
      </h3>
      <hr />
      <div className="py-2">
        <ul className="text-sm">
          {emotional.map((data, i) => (
            <li key={i} className="mb-2">
              <div className="flex items-center justify-between gap-5">
                <span>{data.name}</span>
                <progress
                  className="progress progress-primary w-40 lg:w-48"
                  value={emotionalProgress[i] || 0} // Gunakan nilai progress
                  max="100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Skills;
