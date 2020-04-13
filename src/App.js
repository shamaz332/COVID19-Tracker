import React from 'react';
import Home from './components/home'
import Footer from './components/footer'
import Image from 'react-bootstrap/Image'
import logo from './components/images/corona.png'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="image-wrapper">
      <Image src={logo} roundedCircle alt='da' className="logo"/>
      </div>
<Home/>
<Footer/>
    </div>
  );
}

export default App;
