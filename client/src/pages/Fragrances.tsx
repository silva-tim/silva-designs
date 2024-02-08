import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Candle } from "../types/Candle";
import { getCandles } from "../lib/Api";

export default function Fragrances() {
  const [candles, setCandles] = useState<Candle[]>();

  useEffect(() => {
    setCandles(getCandles());
  }, []);

  return (
    <div className="w-8/12 m-auto">
      <span className="text-2xl font-playfair">Fragrances</span>
      <div className="flex">
        {candles?.map((candle) => (
          <ProductCard
            prodAlt={candle.alt}
            prodId={candle.id}
            prodImg={candle.image}
            prodName={candle.name}
            key={candle.id}
          />
        ))}
      </div>
    </div>
  );
}
