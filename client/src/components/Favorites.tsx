import ProductCard from "./ProductCard";

export default function Favorites() {
  return (
    <div className="flex flex-wrap justify-center">
      <span className="text-2xl tracking-wider text-center font-playfair basis-full">
        Our Favorite Fragrances
      </span>
      <div className="flex">
        <ProductCard />
      </div>
    </div>
  );
}
