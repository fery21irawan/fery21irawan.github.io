import React from "react";
import PropTypes from "prop-types";

function WorkItem({ portfolio }) {
  return (
    <div className="rounded shadow-sm bg-base-100 p-4">
      <div className="w-full aspect-[16/10] opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out">
        <img
          src={portfolio.imageUrl}
          alt="Your Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="my-4">
        <span className="font-semibold text-lg">Hello</span>
      </div>
      <div>
        <ul className="flex flex-wrap items-center gap-x-2 p-4">
          {portfolio.techStack.map((techStack, i) => (
            <li key={i}>
              <div className="w-5 rounded-xl p-4">
                <img src={techStack.icon} />
              </div>
              {/* <img src={techStack.icon} title={techStack.name}></img> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

WorkItem.propTypes = {
  portfolio: PropTypes.object.isRequired,
};
export default WorkItem;
