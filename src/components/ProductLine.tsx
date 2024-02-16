import { useState } from "react";
import { getCandles } from "../lib/Api";
import { Product } from "../types/Product";
import { useOrder } from "../lib/OrderContext";

type props = {
  item: Product;
};

export default function ProductLine({ item }: props) {
  const { onChangeFragrance, onChangeQuantity, onRemoveProduct } = useOrder();
  const [candles] = useState(getCandles());

  return (
    <div className="flex bg-red-200">
      <div className="flex basis-1/3 py-2">
        <select
          name="fragrance"
          value={item.fragrance}
          onChange={(e) => onChangeFragrance(item.id, e.target.value)}
          className="basis-full px-2 py-4"
        >
          {candles.map((candle) => (
            <option key={candle.id} value={candle.name}>
              {candle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex basis-1/3 py-2">
        <button type="button" onClick={() => onRemoveProduct(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
