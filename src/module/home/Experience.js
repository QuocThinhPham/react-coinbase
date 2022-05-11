import { Button } from 'components/form';
import { Section } from 'components/layout';
import { Heading, Paragraph } from 'components/typography';
import hero from 'images/home/experience.png';
import React from 'react';

const Experience = () => {
   return (
      <Section imgSrc={hero} imgPos='right'>
         <Heading className='max-w-[255px] mb-[68px]'>
            Great experience with CoinBase
         </Heading>
         <Paragraph className='max-w-[542px] mb-[30px]'>
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
         </Paragraph>
         <Button to='/#'>DISCOVER</Button>
      </Section>
   );
};

export default Experience;
