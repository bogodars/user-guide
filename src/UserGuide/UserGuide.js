import React, { useState } from 'react';
import Tour from 'reactour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import './UserGuide.css';

const UserGuide = () => {
  const [isTourOpen, setOpen] = useState(true);
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const accentColor = ' #00C58C';

  return (
    <>
      <Tour
        steps={steps}
        onRequestClose={() => setOpen(false)}
        isOpen={isTourOpen}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        rounded={5}
        className='helper'
        accentColor={accentColor}
        showNavigationNumber={false}
        showNumber={false}
      />
    </>
  );
};

const steps = [
  {
    selector: '[data-tour="currency-type"]',
    content: function DemoHelperComponent() {
      return (
        <div className='currency-body'>
          <h3 className='content-title'>currency chart</h3>
          <p className='content-text'>
            Welcome to Betller!
            <br />
            Here you can observe BTC/USDT price movements in real-time. Use
            charts to correctly predict the direction of the Bitcoin price
          </p>
        </div>
      );
    },
    position: [1000, 490],
    style: { color: '#F1F3FF', backgroundColor: '#252A42', minWidth: '380px' },
  },
  {
    selector: '[data-tour="time-zone"]',
    content: function DemoHelperComponent() {
      return (
        <div className='body-time-zone'>
          <h3 className='content-title'>time zone</h3>
          <p className='content-text'>
            Select your time zone here. It is important that you have your
            timezone correctly!
          </p>
        </div>
      );
    },
    position: [800, 455],
    style: { color: '#F1F3FF', backgroundColor: '#252A42', minWidth: '380px' },
  },
  {
    selector: '[data-tour="end-time"]',
    content: (
      <div>
        <h3 className='content-title'>end time</h3>
        <p className='content-text'>
          Here you can see the current round end time. All rounds expire at 5
          mins
        </p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `right`,
  },
  {
    selector: '[data-tour="base-price"]',
    content: (
      <div>
        <h3 className='content-title'>base price</h3>
        <p className='content-text'>Check the Base price</p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
      minWidth: '380px',
    },
    position: `right`,
  },
  {
    selector: '[data-tour="choose-amount"]',
    content: (
      <div>
        <h3 className='content-title'>choose amount</h3>
        <p className='content-text'>Choose your bet amount</p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
      minWidth: '280px',
    },
    position: `right`,
  },
  {
    selector: '[data-tour="right-choise"]',
    content: (
      <div>
        <h3 className='content-title'>make right choise</h3>
        <p className='content-text'>
          If the price goes UP, seize the moment and click HIGH button. If the
          price goes DOWN, click LOW button
        </p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `top`,
  },
  {
    selector: '[data-tour="payout-ratio"]',
    content: (
      <div>
        <h3 className='content-title'>Expected payout ratio</h3>
        <p className='content-text'>
          Here you can see the expected payout ratio.
        </p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `top`,
  },
  {
    selector: '[data-tour="time-left"]',
    content: (
      <div>
        <h3 className='content-title'>Remaining time</h3>
        <p className='content-text'>
          Here you can check the time remaining until the completion of the
          current round
        </p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `top`,
  },
  {
    selector: '[data-tour="place-bet"]',
    content: (
      <div>
        <h3 className='content-title'>place bet</h3>
        <p className='content-text'>Hit Place bet to compete at the round</p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `top`,
  },
  {
    selector: '[data-tour="other-bet"]',
    content: (
      <div>
        <h3 className='content-title'>Check others’ bets</h3>
        <p className='content-text'>
          Here you can watch the bets (HIGH/LOW) of other users
        </p>
      </div>
    ),
    style: {
      color: '#F1F3FF',
      backgroundColor: '#252A42',
    },
    position: `top`,
  },
];

export default UserGuide;
