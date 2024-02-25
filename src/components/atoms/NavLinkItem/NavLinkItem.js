import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { colors } from 'utils/colors';
import { maxDeviceSize } from 'utils/deviceSize';

export const NavLinkItem = ({ href, alt, text, dropdown }) => (
  <StyleNavLinkContainer to={href} alt={alt} dropdown={dropdown}>
    {text}
  </StyleNavLinkContainer>
);

NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dropdown: PropTypes.string,
};

NavLinkItem.defaultProps = {
  dropdown: 'false',
};

const StyleNavLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${({ dropdown }) => (dropdown === 'true' ? '0' : '1rem')};
  color: ${colors.white};

  &:hover {
    cursor: pointer;
    color: ${colors.black};
  }

  @media ${maxDeviceSize.tablet} {
    display: ${({ dropdown }) => (dropdown === 'true' ? 'flex' : 'none')};
  }
`;
