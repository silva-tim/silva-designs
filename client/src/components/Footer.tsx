import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex text-white bg-zinc-900 h-60">
      <div className="flex flex-wrap justify-center basis-1/3">
        <ul className="space-y-2 text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Fragrances</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Order</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center basis-1/3">
        <img src="/android-chrome-512x512.png" alt="" className="h-3/5" />
      </div>
    </footer>
  );
}
