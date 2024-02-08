import { candles } from "./data";

export function getFavorites() {
  const favorites = candles.filter((candle) => candle.favorite === true);
  return favorites;
}

export function getCandle(id: string) {
  const candle = candles.find((candle) => candle.id === id);
  return candle;
}
