import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8000/games'); // Adjust the URL based on your FastAPI server
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

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-blue-500 font-serif">Games Library</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id} className="mb-2">
              <h2 className="text-2xl font-serif">{game.title}</h2>
              <p>{game.description}</p>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Games;
