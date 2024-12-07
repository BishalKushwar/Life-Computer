import React from 'react';
import Header from './components/header/Header';  // Make sure the import path is correct
import Navbar from './components/navbar/Navbar';
import Popup from './components/global/popup';
;
const App = () => {
  return (
    <div>
      {/* Include Header Component */}
      <Header />
      <Navbar/>
      <Popup />
    </div>
  );
}

export default App;
