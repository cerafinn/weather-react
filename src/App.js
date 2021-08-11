import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './pages/Footer';

function App() {
  let city = useState('');

  const [ currentCity, setCurrentCity ] = useState()

  return (
    <div className="App">
      <Header
        city={city}
        setCurrentCity={setCurrentCity}
        currentCity={currentCity}>
      </Header>
      <main>
        <Body currentCity={currentCity}></Body>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
