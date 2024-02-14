import { Dispatch, SetStateAction } from "react";
import { Candle } from "../types/Candle";

type props = {
  candles: Candle[] | undefined;
  key: number;
  product: Candle;
  handleChange: Dispatch<SetStateAction<Candle[]>>;
};

export default function ProductLine({ candles, product, handleChange }: props) {
  return (
    <div className="my-1 flex h-20 border border-black">
      <div className="flex basis-1/3 items-center justify-center">
        <select
          name=""
          id=""
          required
          value={product.name}
          onChange={(e) =>
            handleChange((prev) => [
              ...prev,
              { ...product, name: e.target.value },
            ])
          }
          className="h-1/2 w-11/12 rounded border border-black"
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
      <div className="flex basis-1/3 justify-center bg-red-300">
        <p>{product.desc}</p>
      </div>
      <div className="flex basis-1/3">
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
