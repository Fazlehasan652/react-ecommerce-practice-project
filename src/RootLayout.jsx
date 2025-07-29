import React from 'react';

import { Outlet } from 'react-router';
import Footer from './compnents/Footer/Footer';
import Nav from './compnents/NavigationBar/Nav';


const RootLayout = () => {
  return (
    <>
    <div>
      <Nav/>
    </div>
    <div>
      <Outlet/>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
};

export default RootLayout;