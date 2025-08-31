import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PriceFeed from "./components/PriceFeed";
import StakeForm from "./components/StakeForm";
import Leaderboard from "./components/Leaderboard";
import { fetchPrice } from "./utils/reflectorAPI";

export default function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function getPrice() {
      const p = await fetchPrice();
      setPrice(p);
    }
    getPrice();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <PriceFeed price={price} />
      <StakeForm />
      <Leaderboard />
    </div>
  );
}
