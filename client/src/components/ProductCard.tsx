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
      className="flex flex-wrap justify-center transition basis-1/5 hover:scale-105"
    >
      <div className="h-5/6 basis-full">
        <img src={prodImg} alt={prodAlt} className="h-full m-auto" />
      </div>
      <span>{prodName}</span>
    </Link>
  );
}
