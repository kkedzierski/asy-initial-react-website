import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa6';
import { colors } from 'utils/colors';
import { maxDeviceSize } from 'utils/deviceSize';
import { NavLinkItemsList } from 'components/molecules/NavLinkItemsList/NavLinkItemsList';
import { DropDownNavLinkItemsList } from 'components/molecules/DropDownNavLinkItemsList/DropDownNavLinkItemsList';

/* eslint no-confusing-arrow: "off" */
/* eslint implicit-arrow-linebreak: "off" */
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledNavbarWrapper>
      <StyledNavbarContainer>
        <NavLinkItemsList />
        <StyledToogleButton onClick={() => setToggle(!toggle)}>
          {toggle ? <StyledFaXmark fill={colors.white} /> : <StyledFaBars fill={colors.white} />}
        </StyledToogleButton>
        {toggle && <DropDownNavLinkItemsList />}
      </StyledNavbarContainer>
    </StyledNavbarWrapper>
  );
};

const StyledNavbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1010;
`;

const StyledNavbarContainer = styled.nav`
  background-color: rgba(37, 36, 40, 1);
  color: white;
  padding: 25px;
  font-size: 1rem;
  letter-spacing: 0.1rem;

  @media ${maxDeviceSize.smallScreen} {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
`;

const StyledToogleButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media ${maxDeviceSize.tablet} {
    display: flex;
  }
`;

const StyledFaBars = styled(FaBars)`
  color: ${colors.white};
  font-size: 2rem;
`;

const StyledFaXmark = styled(AiOutlineCloseSquare)`
  color: ${colors.white};
  font-size: 2rem;
`;

export default Navbar;
