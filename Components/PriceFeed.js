import React from "react";
import { formatPrice } from "../utils/reflectorAPI";

export default function PriceFeed({ price }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4 text-center">
      <h2 className="text-lg font-bold">KALE Price (via Reflector)</h2>
      <p className="text-2xl text-green-600">
        {price ? formatPrice(price) : "Loading..."}
      </p>
    </div>
  );
}
