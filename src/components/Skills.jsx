import React from "react";

import { emotional, technical } from "../data/skills";
import Section from "./Section";

function Skills() {
  return (
    <>
      <h2 className="font-bold text-3xl mb-2">Technical</h2>
      <hr />
      {technical.map((data, i) => (
        <div key={i} className="py-2">
          <div className="flex flex-col w-full">
            <div className="divider divider-start">
              <h2 className="text-xl font-semibold">{data.title}</h2>
            </div>
          </div>
          <ul className="text-sm">
            {data.data.map((subdata, i) => {
              return (
                <li key={i} className="mb-2">
                  <div className="flex items-center gap-5 justify-between">
                    <span>{subdata.name}</span>
                    <progress
                      className="progress progress-primary w-40 lg:w-48"
                      value={subdata.percentage}
                      max="100"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <h2 className="font-bold text-3xl mb-2 mt-2">Emotional</h2>
      <hr />
      <div className="py-2">
        <ul className="text-sm">
          {emotional.map((data, i) => (
            <li key={i} className="mb-2">
              <div className="flex items-center justify-between gap-5">
                <span>{data.name}</span>
                <progress
                  className="progress progress-primary w-40 lg:w-48"
                  value={data.percentage}
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
