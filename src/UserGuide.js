import React, { useState } from 'react';
import Tour from 'reactour';

const steps = [
  {
    selector: '[data-tut="currency-type"]',
    content: `Welcome to Betller!
Here you can observe BTC/USDT price movements in real-time. Use charts to correctly predict the direction of the Bitcoin price`,
    position: 'center',

    // you could do something like:
    // position: [160, 250],
    action: (node) => {
      // by using this, focus trap is temporary disabled
      node.focus();
      console.log('yup, the target element is also focused!');
    },
    style: {
      backgroundColor: '#252A42',
      borderRadius: '5px',
    },
    // Disable interaction for this specific step.
    // Could be enabled passing `true`
    // when `disableInteraction` prop is present in Tour
    stepInteraction: false,
    // Text read to screen reader software for this step's navigation dot
    navDotAriaLabel: 'Go to step 4',
  },
  // ...
];

const App = () => {
  const [isTourOpen, isOpen, setIsTourOpen] = useState(false);

  return (
    <>
      {/* other stuff */}
      <Tour
        steps={steps}
        isOpen={isOpen}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </>
  );
};
