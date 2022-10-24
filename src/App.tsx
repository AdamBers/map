import React from 'react';
import './App.css';
import LeftMenu from './leftMenu/LeftMenu';
import Loader from './loader/Loader';
import YandexMap from './map/YandexMap';

function App() {
  return (
    <div className="App">
      <div className="map">
        
        <LeftMenu />
        <YandexMap />
        <Loader />
      </div>
    </div >
  );
}

export default App;
