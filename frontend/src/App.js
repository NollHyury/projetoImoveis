import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//components
import Footer from './Components/footer-component/Footer';

import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
