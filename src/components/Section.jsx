import PropTypes from "prop-types";
import React from "react";

const Section = ({ children, id, title }) => {
  return (
    <section id={id} className="py-5 px-8">
      <h1 className="text-4xl font-bold text-center uppercase mb-3">{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
