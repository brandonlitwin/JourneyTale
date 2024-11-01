import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Games = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [gameList, setGameList] = useState([]);

  const handleAddGame = (e) => {
    e.preventDefault();
    if (gameTitle.trim() !== '') {
      setGameList([...gameList, gameTitle]);
      setGameTitle('');
    }
  };

  return (
    <Layout>
        <h1 className="text-4xl font-bold mb-4 font-serif text-blue-500">My Game Library</h1>
        <form onSubmit={handleAddGame} className="mb-4">
            <input
            type="text"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            placeholder="Enter game title"
            className="border border-gray-400 p-2 rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded font-serif">
            Add Game
            </button>
        </form>
        <ul className="list-disc pl-5">
            {gameList.map((game, index) => (
            <li key={index} className="text-lg">{game}</li>
            ))}
        </ul>
        <Link to="/game-entry" className="text-blue-500 underline">
            Go to Game Entry Page
        </Link>
    </Layout>
  );
};

export default Games;
