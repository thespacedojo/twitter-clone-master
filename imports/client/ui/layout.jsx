import React from 'react';
import AppNavbar from './header.jsx';


export default AppLayout = ({content}) => (
  <div className="app-root">
    <header>
      <AppNavbar />
    </header>

    <div className="mainContent">
      {content}
    </div>
  </div>
);
