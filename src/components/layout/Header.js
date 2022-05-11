import { Button } from 'components/form';
import logo from 'images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from 'routes/navigation';

const Header = () => {
  return (
    <header className='w-[min(100%-2rem,1300px)] mx-auto py-[50px] flex items-center justify-between'>
      <img src={logo} alt={logo} className='max-w-[142px]' />
      <ul className='flex items-center justify-center gap-x-[65px]'>
        {navigation.map((link) => (
          <li className='relative py-[7px] px-[10px] group' key={link.href}>
            <NavLink to={link.href} className='menu-links'>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Button to='/login'>LOGIN</Button>
    </header>
  );
};

export default Header;
