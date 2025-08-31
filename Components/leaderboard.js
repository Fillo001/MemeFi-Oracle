import React from "react";

const sampleMemes = [
  { id: 1, name: "MemeLord", votes: 12 },
  { id: 2, name: "CryptoCat", votes: 9 },
  { id: 3, name: "HODLer", votes: 7 },
];

export default function Leaderboard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="font-bold">Meme Leaderboard 🎉</h2>
      <ul>
        {sampleMemes.map(m => (
          <li key={m.id} className="flex justify-between mt-2">
            <span>{m.name}</span>
            <span>{m.votes} votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
