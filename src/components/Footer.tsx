import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex basis-full flex-wrap items-center justify-center gap-5 bg-zinc-900 py-10 text-white">
      <div className="flexro flex basis-full flex-wrap justify-center">
        <span className="basis-full pb-2 text-center underline underline-offset-4">
          Useful Links
        </span>
        <ul className="flex gap-5">
          <li className="basis-1/6">
            <Link to="/">Home</Link>
          </li>
          <li className="basis-1/6">
            <Link to="/fragrances">Fragrances</Link>
          </li>
          <li className="basis-1/6">
            <Link to="/about">About</Link>
          </li>
          <li className="basis-1/6">
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
      <div className="flex basis-1/2 items-center justify-center">
        <img
          src="/android-chrome-512x512.png"
          alt="Silva Designs Logo"
          className="w-full"
        />
      </div>
    </footer>
  );
}
