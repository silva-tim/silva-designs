import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center h-48">
      <div className="flex flex-wrap justify-center gap-5 basis-full">
        <Link to="/" className="text-4xl text-center font-raleway basis-full">
          S I L V A &nbsp; D E S I G N S
        </Link>
        <nav className="flex gap-5 tracking-wider font-playfair underline-offset-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Fragrances
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
          <Link to="/" className="hover:underline">
            Order
          </Link>
        </nav>
      </div>
    </div>
  );
}

// better yesterday
// aptos instead of apple gothic if cant find
