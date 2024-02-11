import { useEffect, useState } from "react";
import { getCandles } from "../lib/Api";
import { Candle } from "../types/Candle";

export default function ProductLine() {
  const [candles, setCandles] = useState<Candle[]>();
  const [product, setProduct] = useState<string>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCandles(getCandles());
  }, []);

  return (
    <div className="flex h-20 border border-black">
      <div className="flex basis-1/3">
        <select
          name=""
          id=""
          required
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        >
          <option value="" disabled selected>
            Please select a fragrance
          </option>
          {candles?.map((candle) => (
            <option value={candle.name} key={candle.id}>
              {candle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-1/3">
        <button
          disabled={quantity <= 1 && true}
          type="button"
          className="bg-red-400 basis-1/6"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <div className="flex items-center justify-center basis-1/4">
          <span>{quantity}</span>
        </div>
        <button
          type="button"
          className="bg-red-400 basis-1/6"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="flex basis-1/3">
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
