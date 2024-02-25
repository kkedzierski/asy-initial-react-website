import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { maxDeviceSize } from 'utils/deviceSize';
import { NavLinkItem } from 'components/atoms/NavLinkItem/NavLinkItem';
import { NavbarItemDataProvider } from 'providers/NavbarItemDataProvider';

/* eslint no-confusing-arrow: "off" */
/* eslint implicit-arrow-linebreak: "off" */
/* eslint function-paren-newline: "off" */
export const DropDownNavLinkItemsList = () => (
  <StyledDropdownMenu>
    {NavbarItemDataProvider().map((navLinkItem) =>
      navLinkItem.name !== 'Logo' ? (
        <StyledNavItemDropdown key={v4()}>
          <NavLinkItem
            href={navLinkItem.href}
            text={navLinkItem.name}
            alt={navLinkItem.name}
            dropdown="true"
          />
        </StyledNavItemDropdown>
      ) : (
        <span />
      ),
    )}
  </StyledDropdownMenu>
);

const StyledDropdownMenu = styled.div`
  @keyframes slideDown {
    0% {
      transform: translateY(-8%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  display: none;
  position: absolute;
  height: 378px;
  right: 2rem;
  top: 60px;
  width: 300px;
  background-color: rgba(231, 109, 87, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  animation: slideDown 0.5s ease-in-out;
  z-index: 9999;

  @media ${maxDeviceSize.tablet} {
    display: block;
  }

  @media ${maxDeviceSize.phone} {
    left: 2rem;
    width: unset;
  }
`;

const StyledNavItemDropdown = styled.li`
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
