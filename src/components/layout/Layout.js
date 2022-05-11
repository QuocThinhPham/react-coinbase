import { Footer, Header } from 'components/layout';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
