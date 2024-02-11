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
    <section className="w-8/12 m-auto">
      <div className="w-full py-3 border-b border-black">
        <span className="text-2xl font-playfair">Fragrances</span>
      </div>
      <div className="flex flex-wrap mt-5">
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
    </section>
  );
}
