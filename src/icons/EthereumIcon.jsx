import React from 'react';

const EthereumIcon = ({ ...props }) => {
   return (
      <svg width='17' height='31' viewBox='0 0 17 31' fill='none' {...props}>
         <path
            d='M8.31498 20.2066L0.205566 16.3488L8.31498 30.5206L16.4246 16.3488L8.31498 20.2066Z'
            fill='url(#paint0_linear_32_2865)'
         />
         <path
            d='M15.5392 13.474L8.31273 0.922852L1.07812 13.4885L8.31273 10.0566L15.5392 13.474Z'
            fill='url(#paint1_linear_32_2865)'
         />
         <path
            d='M1.70752 15.1169L8.31505 18.2467L14.9336 15.1117L8.31505 11.9822L1.70752 15.1169Z'
            fill='url(#paint2_linear_32_2865)'
         />
         <defs>
            <linearGradient
               id='paint0_linear_32_2865'
               x1='9.12604'
               y1='14.118'
               x2='9.82484'
               y2='39.2291'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FD749B' />
               <stop offset='1' stopColor='#281AC8' />
            </linearGradient>
            <linearGradient
               id='paint1_linear_32_2865'
               x1='9.03172'
               y1='-1.05507'
               x2='9.64788'
               y2='21.2102'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FD749B' />
               <stop offset='1' stopColor='#281AC8' />
            </linearGradient>
            <linearGradient
               id='paint2_linear_32_2865'
               x1='8.98188'
               y1='10.9961'
               x2='9.14942'
               y2='22.1023'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FD749B' />
               <stop offset='1' stopColor='#281AC8' />
            </linearGradient>
         </defs>
      </svg>
   );
};

export default EthereumIcon;
