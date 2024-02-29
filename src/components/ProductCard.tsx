import { Link } from "react-router-dom";

type props = {
  prodId: string;
  prodName: string;
  prodImg: string;
  prodAlt: string;
};

export default function ProductCard({
  prodName,
  prodImg,
  prodAlt,
  prodId,
}: props) {
  return (
    <Link
      to={`/fragrances/${prodId}`}
      className="group flex basis-1/2 flex-wrap justify-center pb-2 sm:basis-1/3 md:basis-1/5"
    >
      <div className="h-5/6 basis-full">
        <img
          src={prodImg}
          alt={prodAlt}
          className="m-auto max-h-full group-hover:rounded-lg"
        />
      </div>
      <span className="font-playfair tracking-wider">{prodName}</span>
    </Link>
  );
}
