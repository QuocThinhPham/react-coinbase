import { Button, Form, Input } from 'components/form';
import { Authenticate } from 'components/layout';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Authenticate title='Sign up' desc='There’s no charge upon registration'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='fullname'
          control={control}
          placeholder='Full Name'
          className='w-full max-w-[74%]'
        />
        <Input
          type='email'
          name='email'
          control={control}
          placeholder='Email'
          className='w-full max-w-[74%]'
        />
        <Input
          type='password'
          name='password'
          control={control}
          placeholder='Password'
          className='w-full max-w-[74%]'
        />
        <Input
          type='password'
          name='confirm_password'
          control={control}
          placeholder='Confirm Password'
          className='w-full max-w-[74%]'
        />
        <Button type='submit'>SIGNUP</Button>
        <div className='font-primary text-xs text-[#2F2F2F] leading-5'>
          <span>Already a member?</span>
          <NavLink to='/register' className='ml-1 font-bold'>
            Login
          </NavLink>
        </div>
      </Form>
    </Authenticate>
  );
};

export default Register;
