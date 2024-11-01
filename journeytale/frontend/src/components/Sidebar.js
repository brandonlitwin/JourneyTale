import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-500 font-serif">JourneyTale</h2>
      <nav className="flex flex-col">
        <Link to="/" className="py-2 px-4 hover:bg-gray-700 rounded font-serif">Home</Link>
        <Link to="/games" className="py-2 px-4 hover:bg-gray-700 rounded font-serif">Games</Link>
        <Link to="/settings" className="py-2 px-4 hover:bg-gray-700 rounded font-serif">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
