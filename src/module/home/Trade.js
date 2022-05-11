import { Heading } from 'components/typography';
import { BitcoinIcon, GiftCardIcon } from 'icons';
import React from 'react';

const trades = [
   {
      icon: BitcoinIcon,
      label: 'Bitcoin',
   },
   {
      icon: GiftCardIcon,
      label: 'Gift Cards',
   },
];

const Trade = () => {
   return (
      <div className='py-[120px] px-[260px] relative bg-gradient-to-br from-pink-500 to-blue-400'>
         <div className='relative bg-white p-[74px] rounded-[30px] shadow-[0px_50px_100px_rgba(0,_0,_0,_0.1)]'>
            <Heading className='text-center before:left-1/2 before:-translate-x-1/2'>
               Trade from anywhere
            </Heading>
            <div className='mt-[60px] relative flex items-center justify-evenly z-[999]'>
               {trades.map((tr, pos) => (
                  <div
                     className='w-[262px] h-[226px] p-[1px] rounded-[15px] bg-gradient-to-br from-pink-500 to-blue-500'
                     key={pos}
                  >
                     <div className='w-full h-full bg-white rounded-[inherit] flex flex-col items-center justify-center gap-y-[50px]'>
                        <tr.icon className='w-[58px] h-[58px]' />
                        <span className='text-base font-bold text-[#333] leading-6'>
                           {tr.label}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Trade;
