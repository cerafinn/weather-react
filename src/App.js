import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
