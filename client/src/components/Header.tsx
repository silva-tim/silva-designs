import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-52 flex items-center">
      <div className="basis-full justify-center flex flex-wrap gap-5">
        <Link to="/" className="font-raleway text-4xl basis-full text-center">
          S I L V A &nbsp; D E S I G N S
        </Link>
        <nav className="flex gap-5 font-playfair tracking-wider underline-offset-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Products
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

// better yesterday
// aptos instead of apple gothic if cant find
