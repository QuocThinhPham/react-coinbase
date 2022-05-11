import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({ children, className }) => {
   return (
      <p
         className={`font-secondary font-normal text-base leading-10 ${className}`}
      >
         {children}
      </p>
   );
};

Paragraph.propTypes = {
   children: PropTypes.any.isRequired,
   className: PropTypes.string,
};

export default Paragraph;
