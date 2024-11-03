import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000';

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddGameForm, setShowAddGameForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${BASE_URL}/games?user_id=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const userId = 1;

  const handleAddGame = async (e) => {
    e.preventDefault();
    if (title && description) {
      const newGame = { title, description, user_id: userId };

      const response = await fetch(`${BASE_URL}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });

      if (response.ok) {
        const createdGame = await response.json();
        setGames((prevGames) => [...prevGames, createdGame]);
        setTitle('');
        setDescription('');
        setShowAddGameForm(false); // Hide form after successful submission
      } else {
        console.error('Failed to add game:', response.status);
      }
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-500 font-serif">Games Library</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {games.length === 0 ? (
            <p>No games available in your library.</p>
          ) : (
            <ul>
              {games.map((game) => (
                <li key={game.id} className="mb-2">
                  <h2 className="text-2xl font-serif">
                    <Link to={`/game-entry/${game.id}`}>{game.title}</Link>
                  </h2>
                  <p>{game.description}</p>
                </li>
              ))}
            </ul>
          )}
          
          <button
            onClick={() => setShowAddGameForm(!showAddGameForm)}
            className="bg-blue-500 text-white p-2 rounded mb-4"
          >
            {showAddGameForm ? 'Cancel' : 'Add Game'}
          </button>

          {showAddGameForm && (
            <form onSubmit={handleAddGame} className="mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Game Title"
                className="border border-gray-400 p-2 rounded mb-2 w-full"
                required
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Game Description"
                className="border border-gray-400 p-2 rounded mb-2 w-full h-32 resize-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Create Game
              </button>
            </form>
          )}
        </>
      )}
    </Layout>
  );

};

export default Games;
