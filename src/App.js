import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import Map from './components/Map';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <WeatherInfo />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
