import { useState } from "react";
import { getCandles } from "../lib/Api";
import { Product } from "../types/Product";
import { useOrder } from "../lib/OrderContext";

type props = {
  item: Product;
};

export default function ProductLine({ item }: props) {
  const { onChangeFragrance } = useOrder();
  const [candles] = useState(getCandles());

  return (
    <div>
      <select
        name="fragrance"
        value={item.fragrance}
        onChange={(e) => onChangeFragrance(item.id, e.target.value)}
      >
        {candles.map((candle) => (
          <option key={candle.id} value={candle.name}>
            {candle.name}
          </option>
        ))}
      </select>
    </div>
  );
}
