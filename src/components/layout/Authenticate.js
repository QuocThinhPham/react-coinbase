import React from 'react';
import PropTypes from 'prop-types';

const Authenticate = ({ children, title, desc }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black bg-opacity-50' />
      <div className='relative z-10 w-full max-w-[645px] p-[55px] rounded-[30px] text-center bg-white'>
        <h3 className='font-primary font-bold text-2xl leading-9 text-transparent bg-gradient-to-br from-pink-500 to-blue-400 bg-clip-text mb-3'>
          {title}
        </h3>
        <p className='font-primary text-base text-[#333] leading-6 mb-7'>
          {desc}
        </p>
        <div className=''>{children}</div>
      </div>
    </div>
  );
};

Authenticate.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Authenticate;
