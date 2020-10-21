import React from 'react';
import Page from '../Core/Page';
import WelcomeSection from './Sections/WelcomeSection';

import WordLandingSection1 from './Sections/WordLandingSection1';
import VotingSVG from '../../img/landing-graphics/voting.svg';

import WordLandingSection2 from './Sections/WordLandingSection2';
import WheelchairSVG from '../../img/landing-graphics/wheelchair.svg';
import MediaSection from './Sections/MediaSection';

import CTASection from './Sections/CTASection';

function Landing() {
  return (
    <Page fixed hide>
      <WelcomeSection />
      <WordLandingSection1 right>
        <VotingSVG width="360px" height="400px" />
      </WordLandingSection1>
      <WordLandingSection2 left>
        <WheelchairSVG width="360px" height="400px" />
      </WordLandingSection2>
      <MediaSection />
      <CTASection />
    </Page>
  );
}

export default Landing;
