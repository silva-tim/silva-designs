import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCandle } from "../lib/Api";
import { Candle } from "../types/Candle";

export default function ProductDetails() {
  const prodId = useParams<string>();
  const [candle, setCandle] = useState<Candle>();

  useEffect(() => {
    if (prodId.prodId !== undefined) {
      setCandle(getCandle(prodId.prodId));
    }
  }, [prodId]);

  return (
    <div className="flex w-10/12 m-auto bg-slate-300">
      <div className="basis-2/5">
        <img src={candle?.image} alt={candle?.alt} />
      </div>
      <div className="flex flex-wrap basis-3/5">
        <div className="flex items-center justify-center border-b border-black h-36 basis-full">
          <span className="text-2xl">{candle?.name}</span>
        </div>
        <div>
          <p>{candle?.desc}</p>
        </div>
      </div>
    </div>
  );
}
