import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form
      className='flex flex-col items-center justify-center gap-y-[30px]'
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
