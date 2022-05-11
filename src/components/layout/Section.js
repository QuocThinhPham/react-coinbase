import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, imgSrc, imgPos = 'left', ...props }) => {
   return (
      <div
         className={`py-[30px] px-[140px] flex items-center justify-between gap-x-[35px] ${props.className}`}
      >
         {imgPos === 'left' ? (
            <>
               <img src={imgSrc} alt='' />
               <div className='flex flex-col gap-x-[35px]'>{children}</div>
            </>
         ) : (
            <>
               <div className='flex flex-col gap-x-[35px]'>{children}</div>
               <img src={imgSrc} alt='' />
            </>
         )}
      </div>
   );
};

Section.propTypes = {
   children: PropTypes.node.isRequired,
   imgSrc: PropTypes.string.isRequired,
   imgPos: PropTypes.string,
};

export default Section;
