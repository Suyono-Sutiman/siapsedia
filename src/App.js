import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Atas from './Component/Atas';
import Search from './Component/Search';
import Slide from './Component/Slide';
import Footer from './Component/Footer';
import Partner from './Component/Partner';
const Flash = React.lazy(() => import('./Component/Flash'));
const Popular = React.lazy(() => import('./Component/Popular'));
const Collection = React.lazy(() => import('./Component/Collection'));
const Amall = React.lazy(() => import('./Component/Amall'));
const Categories = React.lazy(() => import('./Component/Categories'));

function App() {
  return (
    <div>
      <Atas/>
     <Search/>
     <Footer/>
     <Slide/>
     <Partner/>
     
     <React.Suspense fallback={<div>Loading...</div>} >
     <Flash/>
     <Popular/>
     <Collection/>
     <Amall/>
     <Categories/>
     </React.Suspense>
    </div>
  );
}

export default App;
