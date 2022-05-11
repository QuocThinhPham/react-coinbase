import { Button } from 'components/form';
import { Section } from 'components/layout';
import { Heading, Paragraph } from 'components/typography';
import hero from 'images/home/welcome.png';
import React from 'react';

const Welcome = () => {
   return (
      <Section imgSrc={hero}>
         <Heading className='mb-9'>Welcome to CoinBase</Heading>
         <Paragraph className='mb-9'>
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
         </Paragraph>
         <Button to='/#'>DISCOVER</Button>
      </Section>
   );
};

export default Welcome;
