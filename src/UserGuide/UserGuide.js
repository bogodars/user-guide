import React, { useState } from 'react';
import Tour, { Navigation, Dot, Controls, Close } from './index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ButtonHelper } from '../components/Button';
import { GlobalStyle } from './style';

import './UserGuide.css';

const UserGuide = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const accentColor = ' #00C58C';

  return (
    <>
      <GlobalStyle />
      <Tour
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        showNavigationNumber={false}
        rounded={5}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        showNumber={false}
        closeWithMask={false}
        className='helper'
        accentColor={accentColor}
        CustomHelper={MyCustomHelper}
      />
    </>
  );
};

function MyCustomHelper({ current, content, totalSteps, gotoStep, close }) {
  return (
    <main className='CustomHelper__wrapper'>
      <div className='CustomHelper__content'>
        {content}
        <Controls
          data-tour-elem='controls'
          className='CustomHelper__controls'
          style={{
            marginBottom: '40px',
            marginTop: '20px ',
            display: 'unset',
          }}>
          <ButtonHelper
            className='prev-button'
            prev='true'
            onClick={() => gotoStep(current - 1)}
            disabled={current === 0}>
            Prev
          </ButtonHelper>
          <Navigation
            data-tour-elem='navigation'
            className='navigation'
            style={{
              justifyContent: 'unset',
            }}>
            {Array.from(Array(totalSteps).keys()).map((li, i) => (
              <Dot
                key={li}
                onClick={() => current !== i && gotoStep(i)}
                current={current}
                index={i}
                disabled={current === i}
                showNumber={true}
                data-tour-elem='dot'
              />
            ))}
          </Navigation>
          <ButtonHelper
            onClick={() => gotoStep(current + 1)}
            disabled={current === totalSteps - 1}
            className='next-button'
            inverted>
            Next
          </ButtonHelper>
        </Controls>
        <Close onClick={close} className='reactour__close'>
          Skip
        </Close>
      </div>
    </main>
  );
}

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
    style: {},
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
    style: {},
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
