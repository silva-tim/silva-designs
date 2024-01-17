import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex items-center h-48">
      <div className="flex flex-wrap justify-center gap-5 basis-full">
        <Link to="/" className="text-4xl text-center font-raleway basis-full">
          S I L V A &nbsp; D E S I G N S
        </Link>
        <nav className="flex gap-5 tracking-wider font-playfair underline-offset-8">
          <Link
            to="/"
            className={`hover:underline ${path === "/" && `underline`}`}
          >
            Home
          </Link>
          <Link
            to="/fragrances"
            className={`hover:underline ${
              path === "/fragrances" && `underline`
            }`}
          >
            Fragrances
          </Link>
          <Link
            to="/about"
            className={`hover:underline ${path === "/about" && `underline`}`}
          >
            About
          </Link>
          <Link
            to="/order"
            className={`hover:underline ${path === "/order" && `underline`}`}
          >
            Order
          </Link>
        </nav>
      </div>
    </div>
  );
}
