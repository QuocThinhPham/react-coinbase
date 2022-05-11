import PropTypes from 'prop-types';
import React from 'react';

const Heading = ({ children, className, noLine }) => {
  return (
    <h3
      className={`font-primary font-bold text-[28px] bg-gradient-to-br from from-pink-500 to-blue-400 bg-clip-text text-transparent relative ${className} ${
        noLine
          ? ''
          : 'before:content-[""] before:block before:w-[50px] before:h-[5px] before:rounded-[20px] before:bg-pink-500 before:absolute before:-bottom-2 before:left-0'
      }`}
    >
      {children}
    </h3>
  );
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
export default Heading;
