import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

const GameEntry = ({userId}) => {
  const { gameId } = useParams();
  const [entryDate, setEntryDate] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(`http://localhost:8000/games/${gameId}/entries?user_id=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch entries');
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };
    fetchEntries();
  }, [gameId, userId]);

  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (entryDate && entryDescription) {
      try {
        const response = await fetch(`http://localhost:8000/games/${gameId}/entries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: entryDate,
            description: entryDescription,
            user_id: userId,
          }),
        });

        if (!response.ok) throw new Error('Failed to add entry');
        const newEntry = await response.json();

        setEntries([...entries, newEntry]);
        setEntryDate('');
        setEntryDescription('');
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4 text-blue-500">Game Entries</h1>
      <form onSubmit={handleAddEntry} className="mb-4">
        <input
          type="date"
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
          className="border border-gray-400 p-2 rounded mb-4"
        />
        <div className="mb-4">
          <textarea
            value={entryDescription}
            onChange={(e) => setEntryDescription(e.target.value)}
            placeholder="Entry Description"
            className="border border-gray-400 p-2 rounded w-full h-32 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Entry
        </button>
      </form>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{entry.date}</td>
              <td className="border border-gray-300 p-2">{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default GameEntry;
