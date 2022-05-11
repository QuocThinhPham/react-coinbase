import { Heading, Paragraph } from 'components/typography';
import React from 'react';
import device1 from 'images/home/device-1.png';
import device2 from 'images/home/device-2.png';

const Download = () => {
   return (
      <div className='bg-gradient-to-br from-pink-500 to-blue-400'>
         <div className='flex flex-col items-center gap-y-[35px] py-[50px] relative'>
            <Heading className='text-center before:left-1/2 before:-translate-x-1/2'>
               Download our app
            </Heading>
            <Paragraph className='max-w-[378px] text-center text-[#333]'>
               Discover exclusive deals and discounts with our mobile
               experience.
            </Paragraph>
            <div className='flex items-center gap-x-[20px]'>
               {[device1, device2].map((img) => (
                  <img
                     src={img}
                     alt={img}
                     key={img}
                     className='max-w-[283px]'
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Download;
