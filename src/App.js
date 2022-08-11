import React from 'react';
import './App.css';
import './AppMediaLaptop.css';
import './AppMediaMobile.css';
import Footer from "./components/Footer"
import Main from "./components/Main"
import Header from "./components/Header"
import Banners from './components/Banners'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
