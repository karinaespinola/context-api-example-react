import React from 'react';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeProvider';
import Principal from './components/Principal';
import HolaProvider from './context/HolaProvider';

function App() {
  return (
    <ThemeProvider>
      <HolaProvider>
        <Navbar />
        <Principal />
      </HolaProvider>
    </ThemeProvider>
  );
}

export default App;
