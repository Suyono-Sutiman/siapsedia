import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atas from './Component/Atas';
import Search from './Component/Search';
import Slide from './Component/Slide';
import Footer from './Component/Footer';
import Partner from './Component/Partner';
import Flash from './Component/Flash';
import Popular from './Component/Popular';

function App() {
  return (
    <div>
     <Atas/>
     <Search/>
     <Slide/>
     <Footer/>
     <Partner/>
     <Flash/>
     <Popular/>
    </div>
  );
}

export default App;
