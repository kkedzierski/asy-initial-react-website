import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/organisms/Navbar/Navbar';
import { Footer } from 'components/organisms/Footer/Footer';
import { GlobalStyle } from 'styles/GlobalStyles';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default MainLayout;
