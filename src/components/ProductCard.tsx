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
      className="flex basis-1/5 flex-wrap justify-center pb-5 transition hover:scale-105"
    >
      <div className="h-5/6 basis-full">
        <img src={prodImg} alt={prodAlt} className="m-auto max-h-full" />
      </div>
      <span className="font-playfair tracking-wider">{prodName}</span>
    </Link>
  );
}
