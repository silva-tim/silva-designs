import { candles } from "./data";

export function getFavorites() {
  const favorites = candles.filter((candle) => candle.favorite === true);
  return favorites;
}
