import PropTypes from "prop-types";
import React from "react";

const TechnicalSkills = ({ technical, technicalProgress }) => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-2">Technical</h3>
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
              <li key={j} className="mb-2">
                <div className="flex items-center gap-5 justify-between">
                  <div className="flex items-center gap-x-2">
                    {subdata.image && (
                      <img
                        src={subdata.image}
                        alt={subdata.name}
                        className="w-5"
                      />
                    )}
                    <span>{subdata.name}</span>
                  </div>
                  <progress
                    className="progress progress-primary w-40 lg:w-48"
                    value={technicalProgress[i]?.[j] || 0}
                    max="100"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

TechnicalSkills.propTypes = {
  technical: PropTypes.array.isRequired,
  technicalProgress: PropTypes.array.isRequired,
};

export default TechnicalSkills;
