import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="sticky top-0 z-50 flex h-36 items-center border-b bg-white">
      <div className="flex basis-full flex-wrap justify-center gap-3">
        <Link to="/" className="basis-full text-center font-raleway text-3xl">
          S I L V A &nbsp; D E S I G N S
        </Link>
        <nav className="flex gap-5 font-playfair tracking-wide underline-offset-[12px]">
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
