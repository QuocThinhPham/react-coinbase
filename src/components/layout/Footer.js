import { Paragraph } from 'components/typography';
import {
   FacebookIcon,
   GooglePlusIcon,
   InstagramIcon,
   PlusIcon,
   TwitterIcon,
} from 'icons';
import logo from 'images/logo-footer.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const images = [
   'https://images.unsplash.com/photo-1646635142090-f535f5977655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29pbmJhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1625726123977-d4ce5ddd816a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1625806689657-7d15429e956b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1638491806608-15f1c993efc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1605523711462-f5d5a6688e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1625806744302-7cd13216a425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
   'https://images.unsplash.com/photo-1642052502352-d280c0756b9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvaW5iYXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];

const Footer = () => {
   return (
      <footer className='bg-[#151515] text-white h-[350px] pt-[70px] px-[80px] grid grid-cols-footer gap-[10px_60px]'>
         <div className='flex flex-col justify-start gap-[15px]'>
            <img src={logo} alt={logo} className='max-w-[112px] mb-[35px]' />
            <Paragraph className='w-full max-w-[369px] !text-sm font-normal text-[#a5a5a5] leading-7 mb-5'>
               Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
               rhoncus augue. Fusce vel metus pharetra, fermentum
            </Paragraph>
            <div className='flex items-center gap-x-5'>
               <span className='cursor-pointer'>
                  <GooglePlusIcon />
               </span>
               <span className='cursor-pointer'>
                  <FacebookIcon />
               </span>
               <span className='cursor-pointer'>
                  <TwitterIcon />
               </span>
               <span className='cursor-pointer'>
                  <InstagramIcon />
               </span>
            </div>
         </div>
         <div className='flex flex-col justify-start gap-[15px]'>
            <h4 className='font-secondary font-normal text-lg mb-5'>
               CoinBase Links
            </h4>
            <NavLink to='/' className='text-[#a5a5a5]'>
               Home
            </NavLink>
            <NavLink to='/about-us' className='text-[#a5a5a5]'>
               About Us
            </NavLink>
            <NavLink to='/blog' className='text-[#a5a5a5]'>
               Blog
            </NavLink>
            <NavLink to='/sell' className='text-[#a5a5a5]'>
               Sell
            </NavLink>
            <NavLink to='/contact-us' className='text-[#a5a5a5]'>
               Contact Us
            </NavLink>
         </div>
         <div className='flex flex-col justify-start gap-[15px]'>
            <h4 className='font-secondary font-normal text-lg mb-5'>
               Contact Us
            </h4>
            <span className='text-[#a5a5a5] last:mt-auto'>
               (+234) 137632128
            </span>
            <span className='text-[#a5a5a5] last:mt-auto'>
               Coinbase@yahoo.com
            </span>
            <span className='text-[#a5a5a5] last:mt-auto'>
               Address goes here
            </span>
            <span className='text-[#a5a5a5] last:mt-auto'>
               Download Our App
            </span>
         </div>
         <div className='flex flex-col justify-start gap-[15px]'>
            <h4 className='font-secondary font-normal text-lg mb-5'>
               CoinBase Instagram
            </h4>
            <div className='grid grid-cols-[repeat(4,_minmax(70px,_1fr))] grid-rows-[repeat(2,_70px)] gap-[10px]'>
               {images.map((img) => {
                  return (
                     <div
                        className='relative cursor-pointer transition-all group'
                        key={img}
                     >
                        <img
                           src={img}
                           alt={img}
                           className='w-full h-full object-cover absolute  transition-all group-hover:brightness-50 group-hover:saturate-50'
                        />
                        <span className='absolute inset-0 z-[99] flex items-center justify-center invisible opacity-0 !fill-white transition-all group-hover:visible group-hover:opacity-100'>
                           <PlusIcon />
                        </span>
                     </div>
                  );
               })}
            </div>
         </div>
         <Paragraph className='!text-xs font-normal text-[#a5a5a5] opacity-40 mix-blend-normal'>
            © 2019 Designed by Cr8tiv_yemmy
         </Paragraph>
      </footer>
   );
};

export default Footer;
