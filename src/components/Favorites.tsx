import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getFavorites } from "../lib/Api";
import { Candle } from "../types/Candle";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Candle[]>();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <span className="basis-full border-b border-black pb-2 pt-10 text-center font-playfair text-lg tracking-wider">
        House Favorite Fragrances
      </span>
      <div className="flex flex-wrap py-2">
        {favorites?.map((favorite) => (
          <ProductCard
            prodAlt={favorite.alt}
            prodId={favorite.id}
            prodImg={favorite.image}
            prodName={favorite.name}
            key={favorite.id}
          />
        ))}
      </div>
    </div>
  );
}
