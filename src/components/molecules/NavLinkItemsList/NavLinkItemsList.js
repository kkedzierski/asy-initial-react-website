import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { maxDeviceSize } from 'utils/deviceSize';
import { NavLinkItem } from 'components/atoms/NavLinkItem/NavLinkItem';
import { NavbarItemDataProvider } from 'providers/NavbarItemDataProvider';

/* eslint no-confusing-arrow: "off" */
/* eslint implicit-arrow-linebreak: "off" */
/* eslint function-paren-newline: "off" */
export const NavLinkItemsList = () => (
  <StyledListItems>
    {NavbarItemDataProvider().map((navLinkItem) => (
      <NavLinkItem
        href={navLinkItem.href}
        text={navLinkItem.name}
        alt={navLinkItem.name}
        key={v4()}
      />
    ))}
  </StyledListItems>
);

const StyledListItems = styled.ul`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  max-width: 1300px;
  margin: auto;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
  }
`;
