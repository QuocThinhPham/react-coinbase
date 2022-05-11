import { Button } from 'components/form';
import { Section } from 'components/layout';
import { Heading, Paragraph } from 'components/typography';
import hero from 'images/home/hero.png';
import React from 'react';

const Banner = () => {
   return (
      <Section
         imgSrc={hero}
         imgPos='right'
         className='h-[750px] gap-x-[70px] bg-gradient-to-br from-pink-500 to-blue-400 relative'
      >
         <Heading
            className='!text-white !font-secondary !text-[40px] !font-light mb-5'
            noLine
         >
            We provide easy solution to exchange your&nbsp;
            <span className='font-secondary font-bold'>
               Bitcoin/ GiftCard for money
            </span>
         </Heading>
         <Paragraph className='!text-lg text-white mb-[30px]'>
            CoinBase is a platform for trading your bitcoin and
            <br />
            giftcard at the best rate, why not give us a trial.
         </Paragraph>
         <Button to='/' secondary>
            GET STARTED
         </Button>
      </Section>
   );
};

export default Banner;
