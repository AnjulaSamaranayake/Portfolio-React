import React from 'react';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import "./App.css";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Home />
    </div>
  )
};

export default App;