import { useEffect, useState } from "react";
import { getCandles } from "../lib/Api";
import { Candle } from "../types/Candle";

export default function ProductLine() {
  const [candles, setCandles] = useState<Candle[]>();
  const [product, setProduct] = useState<string>();

  useEffect(() => {
    setCandles(getCandles());
  }, []);

  console.log(product);
  return (
    <div className="h-20 border border-black bg-slate-400">
      <select name="" id="" onChange={(e) => setProduct(e.target.value)}>
        {candles?.map((candle) => (
          <option value={candle.name} key={candle.id}>
            {candle.name}
          </option>
        ))}
      </select>
      <input type="checkbox" name="" id="" />
    </div>
  );
}
