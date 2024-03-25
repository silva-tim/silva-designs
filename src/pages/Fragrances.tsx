import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Candle } from "../types/Candle";
import { getCandles } from "../lib/api";

export default function Fragrances() {
  const [candles, setCandles] = useState<Candle[]>();

  useEffect(() => {
    setCandles(getCandles());
  }, []);

  return (
    <div className="xl:max-w-3xl2xl m-auto my-4 max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div className="w-full border-b border-black py-3">
        <span className="font-playfair text-xl">Fragrances</span>
      </div>
      <div className="mt-5 flex flex-wrap">
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
