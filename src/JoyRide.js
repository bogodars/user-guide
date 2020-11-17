import React, { useEffect } from 'react';
import JoyRide from 'react-joyride';

import './JoyRide.css';
// Tour steps
const TOUR_STEPS = [
  {
    target: '.step1',
    content: (
      <div>
        <h3 className='content-title'>currency chart</h3>
        <p className='content-text'>
          Welcome to Betller! Here you can observe BTC/USDT price movements in
          real-time. Use charts to correctly predict the direction of the
          Bitcoin price
        </p>
      </div>
    ),
    disableBeacon: true,
  },
  {
    target: '.step2',
    content: (
      <div>
        <h3 className='content-title'>time zone</h3>
        <p>
          Select your time zone here. It is important that you have your
          timezone correctly!
        </p>
      </div>
    ),
  },
  {
    target: '.step3',
    content: (
      <div>
        <h3 className='content-title'>end time</h3>
        <p>
          Here you can see the current round end time. All rounds expire at 5
          mins
        </p>
      </div>
    ),
  },
  {
    target: '.step4',
    content: (
      <div>
        <h3 className='content-title'>base price</h3>
        <p>Check the Base price</p>
      </div>
    ),
  },
  {
    target: '.step5',
    content: (
      <div>
        <h3 className='content-title'>choose amount</h3>
        <p>Choose your bet amount</p>
      </div>
    ),
  },
  {
    target: '.step6',
    content: (
      <div>
        <h3 className='content-title'>make right choise</h3>
        <p>
          If the price goes UP, seize the moment and click HIGH button. If the
          price goes DOWN, click LOW button
        </p>
      </div>
    ),
  },
  {
    target: '.step7',
    content: (
      <div>
        <h3 className='content-title'>Expected payout ratio</h3>
        <p>Here you can see the expected payout ratio.</p>
      </div>
    ),
  },
  {
    target: '.step8',
    content: (
      <div>
        <h3 className='content-title'>Remaining time</h3>
        <p>
          Here you can check the time remaining until the completion of the
          current round
        </p>
      </div>
    ),
  },
  {
    target: '.step9',
    content: (
      <div>
        <h3 className='content-title'>place bet</h3>
        <p>Hit Place bet to compete at the round</p>
      </div>
    ),
    placement: 'bottom',
  },
  {
    target: '.step10',
    content: (
      <div>
        <h3 className='content-title'>Check others’ bets</h3>
        <p>Here you can watch the bets (HIGH/LOW) of other users</p>
      </div>
    ),
  },
];

// Tour component
const Tour = () => {
  useEffect(() => {
    // TODO: Auto start the tour
  }, []);
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        disableScrolling={true}
        styles={{
          options: {
            backgroundColor: '#252A42',
            overlayColor: 'rgba(29, 30, 34, 0.9)',
            // primaryColor: '#000',
            textColor: '#F1F3FF',
            width: 400,
            zIndex: 1000,
            borderRadius: '5px',
          },
          tooltipContainer: {
            textAlign: 'left',
          },

          buttonNext: {
            backgroundColor: '#FED248',
            color: '#1E243A',
            padding: '12px 20px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            border: 'none',
            outline: 'none',
          },
          buttonBack: {
            marginRight: 10,
            backgroundColor: '#CBD1E6',
            borderRadius: '4px',
            color: '#1E243A',
            textTransform: 'uppercase',
            padding: '12px 20px',
            border: 'none',
            outline: 'none',
          },
          buttonSkip: {
            color: '#CBD1E6',
            backgroundColor: '#53576C',
            borderRadius: '4px',
            padding: '12px 20px',
            outline: 'none',
          },
        }}
        locale={{
          last: 'NEXT',
          back: 'PREV',
          skip: 'Skip',
        }}
      />
    </>
  );
};

export default Tour;
