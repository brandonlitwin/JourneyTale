import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import GameEntry from './pages/GameEntry';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game-entry" element={<GameEntry />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
