import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atas from './Component/Atas';
import Search from './Component/Search';
import Slide from './Component/Slide';
import Footer from './Component/Footer';
import Partner from './Component/Partner';
import Pick from './Component/Pick';
import LazyLoad from 'react-lazyload';
import Flash from './Component/Flash';
import Popular from './Component/Popular';
import Collection from './Component/Collection';
import Amall from './Component/Amall';
import Categories from './Component/Categories';

function App() {
  return (
    <div>
      <Atas/>
     <Search/>
     <Footer/>
     <Slide/>
     <Partner/>
     <LazyLoad height='200'>
     <Flash/>
     <Popular/>
     <Collection/>
     <Amall/>
     <Categories/>
     <Pick/>
     </LazyLoad>
    </div>
  );
}

export default App;
