import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './Pages/404';

const Index = () => {
  const token = '';
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Index;