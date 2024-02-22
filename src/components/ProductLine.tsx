import { useEffect, useState } from "react";
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

  useEffect(() => {});

  return (
    <div className="flex items-center">
      <div className="flex basis-5/12 p-2">
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
      <div className="flex basis-2/12 justify-center">
        <QuantityChanger item={item} />
      </div>
      <div className="flex basis-3/12 justify-around">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="gift"
            id={`${item.id}`}
            onChange={() => onGift(item.id)}
            checked={item.gift}
          />
          <label htmlFor={`${item.id}`}>Make this a gift?</label>
        </div>
        <span>
          <span>$</span>
          {item.price}
        </span>
      </div>
      <div className="flex basis-2/12 justify-center p-2">
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
