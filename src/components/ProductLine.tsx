import { useState } from "react";
import { getCandles } from "../lib/Api";
import { Product } from "../types/Product";
import { useOrder } from "../lib/OrderContext";
import QuantityChanger from "./QuantityChanger";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type props = {
  item: Product;
};

export default function ProductLine({ item }: props) {
  const { onChangeFragrance, onRemoveProduct, onGift } = useOrder();
  const [candles] = useState(getCandles());

  return (
    <div className="flex h-16 items-center">
      <div className="relative flex basis-5/12 p-2">
        <select
          name="fragrance"
          value={item.fragrance}
          onChange={(e) => onChangeFragrance(item.id, e.target.value)}
          className="basis-full appearance-none border border-black p-2"
          id="fragrance"
        >
          {candles.map((candle) => (
            <option key={candle.id} value={candle.name}>
              {candle.name}
            </option>
          ))}
        </select>
        <label htmlFor="fragrance" className="absolute right-4 top-4 text-2xl">
          <MdOutlineKeyboardArrowDown />
        </label>
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
