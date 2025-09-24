import React from 'react';
import background from '../assets/images/background.png';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;