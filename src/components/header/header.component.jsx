import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <Logo className='logo-container' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          <p>shop</p>
        </Link>
        <Link className='option' to='/contact'>
          <p>contact</p>
        </Link>
        <Link className='option' to='/signin'>
          <p>sign in</p>
        </Link>
        <Link className='option' to='/cart'>
          <p>cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
