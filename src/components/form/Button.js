import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type = 'button',
  to,
  secondary,
  onClick = () => {},
  ...props
}) => {
  if (to)
    return (
      <NavLink to={to}>
        <button
          type={type}
          className={`py-[17px] px-[56px] border-0 outline-0 rounded-[100px] text-sm font-bold leading-6 tracking-wide cursor-pointer relative ${
            secondary
              ? 'bg-white'
              : 'bg-gradient-to-br from-pink-500 to-blue-600 text-white'
          }`}
          onClick={onClick}
          {...props}
        >
          {secondary ? (
            <span className='bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-blue-600'>
              {children}
            </span>
          ) : (
            children
          )}
        </button>
      </NavLink>
    );
  else
    return (
      <button
        type={type}
        className={`py-[17px] px-[56px] border-0 outline-0 rounded-[100px] text-sm font-bold leading-6 tracking-wide cursor-pointer relative ${
          secondary
            ? 'bg-white'
            : 'bg-gradient-to-br from-pink-500 to-blue-600 text-white'
        }`}
        onClick={onClick}
        {...props}
      >
        {secondary ? (
          <span className='bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-blue-600'>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
