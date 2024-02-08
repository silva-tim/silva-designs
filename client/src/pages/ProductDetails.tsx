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
    <div className="w-8/12 m-auto">
      <img src={candle?.image} alt={candle?.alt} />
      <span>{candle?.name}</span>
    </div>
  );
}
