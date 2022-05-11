import { Layout } from 'components/layout';
import {
   Banner,
   Download,
   Experience,
   Rates,
   Subscribe,
   Trade,
   Welcome,
} from 'module/home';
import React from 'react';

const Home = () => {
   return (
      <>
         <Layout>
            <Banner />
            <Welcome />
            <Rates />
            <Experience />
            <Trade />
            <Download />
            <Subscribe />
         </Layout>
      </>
   );
};

export default Home;
