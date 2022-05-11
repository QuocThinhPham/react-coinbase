import { Authenticate } from 'components/layout';
import React from 'react';

const Login = () => {
  return (
    <Authenticate
      title='Welcome back!'
      desc='Kindly fill in your login details to proceed'
    ></Authenticate>
  );
};

export default Login;
