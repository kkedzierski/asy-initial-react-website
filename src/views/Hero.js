import React from 'react';
import styled from 'styled-components';
import videoBg from 'assets/video/playing-cards.mp4';
import playingCardsPoster from 'assets/images/playing-cards-poster.png';
import { maxDeviceSize } from 'utils/deviceSize';
import { colors } from 'utils/colors';
import I18n from 'services/translation/I18n';

const Hero = () => (
  <StyledHeroWrapper>
    <StyledVideoBackground
      src={videoBg}
      muted
      autoPlay
      loop
      playsInline
      poster={playingCardsPoster}
    />
    <StyledContentContainer>
      <StyledTitle>
        <I18n trans="home.hero.title" />
      </StyledTitle>
      <p>
        <I18n trans="home.hero.description" />
      </p>
    </StyledContentContainer>
  </StyledHeroWrapper>
);

const StyledHeroWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

const StyledVideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  z-index: 1000;
  color: ${colors.black};

  @media ${maxDeviceSize.smallScreen} {
    font-size: 1.4rem;
  }

  @media ${maxDeviceSize.verySmallScreen} {
  }

  @media ${maxDeviceSize.tablet} {
    font-size: 1.2rem;
  }
`;

const StyledTitle = styled.h1`
  padding: 1rem;
`;

export default Hero;
