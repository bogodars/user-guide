import React from 'react';
import './HeaderBody.css';
import { ReactComponent as Logo } from '../assets/img/Logo.svg';
import { FaBitcoin } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from './Button';
import { BsQuestionCircle } from 'react-icons/bs';
import Sun from './Sun';

const HeaderBody = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__inner'>
          <div className='header__input'>
            <Logo className='logo' style={{ marginRight: '10px' }} />
            <div className='header__input-left'>
              <IconContext.Provider
                value={{
                  className: 'global-class-name',
                  size: '2em',
                }}>
                <div style={{ color: 'white' }}>
                  <FaBitcoin />
                </div>
              </IconContext.Provider>

              <input type='text' placeholder='Crypto Betting' />
              <BiChevronDown />
            </div>
          </div>
          <div className='header__input-right'>
            <GiHamburgerMenu />
            <Button active>Sign Up</Button>
            <Button>Log in</Button>

            <IconContext.Provider
              value={{
                className: 'global-class-name',
                size: '1.5em',
              }}>
              <div className='question' style={{ color: 'white' }}>
                <BsQuestionCircle />
              </div>
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                className: 'global-class-name',
                size: '2em',
              }}>
              <div className='question' style={{ color: 'white' }}>
                <Sun />
              </div>
            </IconContext.Provider>
            <div className='lang'>
              EN
              <BiChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
