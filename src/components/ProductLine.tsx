import { useState } from "react";
import { getCandles } from "../lib/Api";
import { Product } from "../types/Product";
import { useOrder } from "../lib/OrderContext";

type props = {
  item: Product;
};

export default function ProductLine({ item }: props) {
  const { onChangeFragrance, onRemoveProduct, onGift } = useOrder();
  const [candles] = useState(getCandles());

  return (
    <div className="flex border border-black">
      <div className="flex basis-1/3 p-2">
        <select
          name="fragrance"
          value={item.fragrance}
          onChange={(e) => onChangeFragrance(item.id, e.target.value)}
          className="basis-full border border-black px-2 py-4"
        >
          {candles.map((candle) => (
            <option key={candle.id} value={candle.name}>
              {candle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-1/3 justify-end py-2">
        <label htmlFor={`${item.id}`}>Make this a gift?</label>
        <input
          type="checkbox"
          name="gift"
          id={`${item.id}`}
          onChange={() => onGift(item.id)}
          checked={item.gift}
        />
      </div>
      <div className="flex basis-1/3 justify-end px-2 py-2">
        <button
          type="button"
          onClick={() => onRemoveProduct(item.id)}
          className="rounded bg-red-300 px-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
