import React from 'react';
import './App.css';
import Loader from './loader/Loader';
import YandexMap from './map/YandexMap';

function App() {
  return (
    <div className="App">
      <div className="map" id="map"></div>
      <Loader />
      <YandexMap />
    </div >
  );
}

export default App;
