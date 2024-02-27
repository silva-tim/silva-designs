import { useState } from "react";
import { getCandles } from "../lib/Api";
import { Product } from "../types/Product";
import { useOrder } from "../lib/OrderContext";
import QuantityChanger from "./QuantityChanger";

type props = {
  item: Product;
};

export default function ProductLine({ item }: props) {
  const { onChangeFragrance, onRemoveProduct, onGift } = useOrder();
  const [candles] = useState(getCandles());

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <div className="relative flex basis-full p-2">
        <select
          name="fragrance"
          value={item.fragrance}
          onChange={(e) => onChangeFragrance(item.id, e.target.value)}
          className="basis-full border border-black py-2"
          id={`fragrance-${item.id}`}
        >
          {candles.map((candle) => (
            <option key={candle.id} value={candle.name}>
              {candle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-full justify-evenly">
        <div className="flex basis-1/4 justify-center">
          <QuantityChanger item={item} />
        </div>
        <div className="flex basis-1/4 items-center justify-center">
          <div className="flex gap-1">
            <input
              type="checkbox"
              name="gift"
              id={`${item.id}`}
              onChange={() => onGift(item.id)}
              checked={item.gift}
            />
            <label className="text-sm" htmlFor={`${item.id}`}>
              Gift?
            </label>
          </div>
        </div>
        <div className="flex basis-1/4 items-center justify-center">
          <span>$</span>
          <span>{item.price}</span>
        </div>
      </div>
      <div className="flex basis-full justify-center p-2">
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
