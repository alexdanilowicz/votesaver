import React from 'react';
import Page from '../Core/Page';
import WelcomeSection from './Sections/WelcomeSection';


function Landing() {
  return (
    <Page fixed hide>
      <WelcomeSection />
    </Page>
  );
}

export default Landing;
