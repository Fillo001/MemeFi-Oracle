import React, { useState } from "react";

export default function StakeForm() {
  const [amount, setAmount] = useState("");

  const handleStake = () => {
    alert(`Staked ${amount} KALE! (demo only)`);
    setAmount("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <h2 className="font-bold">Stake Your KALE</h2>
      <input 
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border rounded p-2 w-full mt-2"
        placeholder="Enter amount..."
      />
      <button
        onClick={handleStake}
        className="bg-green-500 text-white px-4 py-2 rounded mt-3"
      >
        Stake
      </button>
    </div>
  );
}
