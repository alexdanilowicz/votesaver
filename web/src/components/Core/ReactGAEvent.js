import ReactGA from 'react-ga';

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const reactGAEvent = (category, action) => {
  console.log('Google Analytics event fired.');
  ReactGA.event({
    category,
    action,
  });
};

export default function foo() { }
