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
    <section className="m-auto w-11/12">
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
    </section>
  );
}
