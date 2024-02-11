import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex h-60 items-center bg-zinc-900 text-white">
      <div className="flex basis-1/3 flex-wrap justify-center">
        <ul className="space-y-2 text-center">
          <li>
            <span className="text-lg underline underline-offset-4">
              Useful Links
            </span>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fragrances">Fragrances</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
      <div className="flex basis-1/3 items-center justify-center">
        <img
          src="/android-chrome-512x512.png"
          alt="Silva Designs Logo"
          className="h-40"
        />
      </div>
      <div className="flex basis-1/3 flex-wrap justify-center">
        <ul className="space-y-2 text-center">
          <li>
            <span className="text-lg underline underline-offset-4">
              Learn More
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
