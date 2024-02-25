import React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/colors';

export const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterContainer>
      <StyledCopyrightContainer>
        <StyledCopySection>
          <StyledCopyDescription>
            Copyright c 2024. Wszelkie prawa zastrzeżone - Asy rękawów
          </StyledCopyDescription>
        </StyledCopySection>
      </StyledCopyrightContainer>
    </StyledFooterContainer>
  </StyledFooterWrapper>
);

const StyledFooterWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-around;
  background-color: ${colors.lightBlack};
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCopyrightContainer = styled.div`
  margin: 3% 5% 0 5%;
  display: flex;
  justify-content: space-between;
  border-top: #b5b8b8 1px solid;
`;

const StyledCopyDescription = styled.p`
  color: ${colors.white};
`;

const StyledCopySection = styled.div`
  margin-top: 1rem;
  color: ${colors.white};
`;
