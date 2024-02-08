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
      <span className="mb-5 text-2xl tracking-wider text-center font-playfair basis-full">
        Our Favorite Fragrances
      </span>
      <div className="flex">
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
