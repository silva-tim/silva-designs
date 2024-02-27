import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCandle } from "../lib/api";
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
    <div className="m-auto my-4 flex w-11/12 flex-wrap">
      <div className="basis-full">
        <img src={candle?.image} alt={candle?.alt} />
      </div>
      <div className="flex basis-full flex-wrap">
        <span className="basis-full p-4 text-center text-lg underline underline-offset-4">
          {candle?.name}
        </span>
        <p className="text-center">{candle?.desc}</p>
      </div>
    </div>
  );
}
