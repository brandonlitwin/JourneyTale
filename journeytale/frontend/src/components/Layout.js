// src/components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen bg-indigo-200">
      <div className="mt-10 text-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
