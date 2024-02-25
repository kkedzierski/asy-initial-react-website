import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import { pages } from '../constans/pages';

const Pages = () => (
  <AnimatePresence mode="wait">
    <Routes>
      <Route index path={pages.home} element={<Home />} />
    </Routes>
  </AnimatePresence>
);
export default Pages;
