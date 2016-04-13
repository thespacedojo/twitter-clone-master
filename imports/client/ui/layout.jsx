import React from 'react';
import AppNavbar from './header.jsx';
import FlashDisplay from '/imports/client/ui/containers/flash_display.js';


export default AppLayout = ({content}) => (
  <div className="app-root">
    <header>
      <AppNavbar />
    </header>

    <FlashDisplay />
    <div className="mainContent">
      {content}
    </div>
  </div>
);
