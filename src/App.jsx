import React from 'react';
import Header from './components/header/Header';  // Make sure the import path is correct
import Navbar from './components/navbar/Navbar';
import Popup from './components/global/popup';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
;
const App = () => {
  return (
    <div>
      {/* Include Header Component */}
      <Header />
      <Navbar/>
      <Popup />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
