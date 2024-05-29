// src/App.js
import React from 'react';
import ShortenForm from './components/ShortenForm';
import VisitShortUrl from './components/VisitShortUrl';

function App() {
  return (
    <div className="App">
      <ShortenForm />
      <VisitShortUrl />
    </div>
  );
}

export default App;
