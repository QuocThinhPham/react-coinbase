import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({
  border,
  name,
  control,
  type = 'text',
  className,
  ...props
}) => {
  const { field } = useController({ name, control, defaultValue: '' });
  switch (border) {
    case 'gradient':
      return (
        <div className='bg-gradient-to-br from-pink-500 to-blue-400 p-[1px] rounded-[100px] overflow-hidden w-full max-w-[388px]'>
          <input
            autoComplete='off'
            className='font-primary font-normal text-sm text-[#333] leading-6 w-full py-[17px] px-[30px] rounded-[inherit] outline-none border-none placeholder-[#333]'
            type={type}
            {...field}
            {...props}
          />
        </div>
      );

    default:
      return (
        <input
          type={type}
          autoComplete='off'
          className={`font-primary font-normal text-sm text-[#333] leading-6 py-[17px] px-[30px] rounded-[5px] outline-none border-[1px] border-[#D1D1D1] placeholder-[#333] ${className}`}
          {...field}
          {...props}
        />
      );
  }
};

Input.propTypes = {
  border: PropTypes.string,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
};

export default Input;
