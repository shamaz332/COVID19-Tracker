import React from 'react';
import Home from './components/home'
import Footer from './components/footer'
import Image from 'react-bootstrap/Image'
import logo from './components/images/corona.png'
import './App.css'
import ReactGa from 'react-ga';
function App() {
  ReactGa.initialize('UA-164182099-1')
  ReactGa.pageview("/");
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
