import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { pages } from '../constans/pages';

const Pages = () => (
  <Routes>
    <Route index path={pages.home} element={<Home />} />
  </Routes>
);
export default Pages;
