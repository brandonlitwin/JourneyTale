import React, { useState } from 'react';
import Layout from '../components/Layout';

const GameEntry = () => {
  const [entryDate, setEntryDate] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (entryDate && entryDescription) {
      setEntries([...entries, { date: entryDate, description: entryDescription }]);
      setEntryDate('');
      setEntryDescription('');
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Game Entries</h1>
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
