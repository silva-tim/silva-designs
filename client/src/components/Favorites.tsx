import ProductCard from "./ProductCard";

export default function Favorites() {
  return (
    <div className="flex flex-wrap justify-center">
      <span className="mb-5 text-2xl tracking-wider text-center font-playfair basis-full">
        Our Favorite Fragrances
      </span>
      <div className="flex">
        <ProductCard
          prodAlt=""
          prodId={3}
          prodImg="/images/products/herbal_serenity.jpg"
          prodName="Herbal"
        />
        <ProductCard
          prodAlt=""
          prodId={3}
          prodImg="/images/products/herbal_serenity.jpg"
          prodName="Herbal"
        />
        <ProductCard
          prodAlt=""
          prodId={3}
          prodImg="/images/products/herbal_serenity.jpg"
          prodName="Herbal"
        />
        <ProductCard
          prodAlt=""
          prodId={3}
          prodImg="/images/products/herbal_serenity.jpg"
          prodName="Herbal"
        />
        <ProductCard
          prodAlt=""
          prodId={3}
          prodImg="/images/products/herbal_serenity.jpg"
          prodName="Herbal"
        />
      </div>
    </div>
  );
}
