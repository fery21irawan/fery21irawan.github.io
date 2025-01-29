import PropTypes from "prop-types";
import React from "react";

const EmotionalSkills = ({ emotional, emotionalProgress }) => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-2 mt-2">Emotional</h3>
      <hr />
      <div className="py-2">
        <ul className="text-sm">
          {emotional.map((data, i) => (
            <li key={i} className="mb-2">
              <div className="flex items-center justify-between gap-5">
                <span>{data.name}</span>
                <progress
                  className="progress progress-primary w-40 lg:w-48"
                  value={emotionalProgress[i] || 0}
                  max="100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

EmotionalSkills.propTypes = {
  emotional: PropTypes.array.isRequired,
  emotionalProgress: PropTypes.array.isRequired,
};

export default EmotionalSkills;
