'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch('/api/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, dateTime, message }),
  });

  const data = await res.json();
  console.log('Server response:', data);
  alert('Scheduled successfully!');
};

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">SmartScheduler</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-900">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded text-gray-900"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-900">Date and Time</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full border px-3 py-2 rounded text-gray-900"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-900">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border px-3 py-2 rounded text-gray-900"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Schedule
        </button>
      </form>
    </main>
  );
}
