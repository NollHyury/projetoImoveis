import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//components
import Footer from './Components/footer-component/Footer';
import NavBar from './Components/nav-bar-component/NavBar';

import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
