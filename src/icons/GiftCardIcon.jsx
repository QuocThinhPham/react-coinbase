import React from 'react';

const GiftCardIcon = ({ ...props }) => {
   return (
      <svg width='70' height='40' viewBox='0 0 70 40' fill='none' {...props}>
         <rect
            x='0.257812'
            width='69.5502'
            height='39.0135'
            rx='5'
            fill='url(#paint0_linear_32_2931)'
         />
         <rect
            x='24.0332'
            y='23.8931'
            width='22'
            height='3.5'
            rx='1.75'
            fill='white'
         />
         <rect
            x='18.0391'
            y='14.9395'
            width='33.9883'
            height='5.40723'
            rx='2.70361'
            fill='white'
         />
         <defs>
            <linearGradient
               id='paint0_linear_32_2931'
               x1='38.5104'
               y1='-6.14102'
               x2='39.746'
               y2='63.0186'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FD749B' />
               <stop offset='1' stopColor='#281AC8' />
            </linearGradient>
         </defs>
      </svg>
   );
};

export default GiftCardIcon;
