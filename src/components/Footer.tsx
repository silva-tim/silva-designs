import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex basis-full flex-wrap items-center justify-center gap-5 bg-zinc-900 py-10 text-white">
      <div className="flex basis-full flex-wrap justify-center md:basis-1/4">
        <span className="basis-full pb-2 text-center underline underline-offset-4">
          Useful Links
        </span>
        <ul className="flex gap-5 md:flex-wrap md:gap-2">
          <li className="basis-1/6 md:basis-full md:text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="basis-1/6 md:basis-full md:text-center">
            <Link to="/fragrances">Fragrances</Link>
          </li>
          <li className="basis-1/6 md:basis-full md:text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="basis-1/6 md:basis-full md:text-center">
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
      <div className="flex basis-1/2 items-center justify-center md:basis-1/4">
        <img
          src="/android-chrome-512x512.png"
          alt="Silva Designs Logo"
          className="w-full lg:w-1/2"
        />
      </div>
      <div className="hidden basis-1/4 flex-wrap justify-center md:flex">
        <span className="basis-full pb-2 text-center underline underline-offset-4">
          Learn More
        </span>
        <ul className="flex flex-wrap gap-2">
          <li className="basis-full text-center">
            <Link to="/">Candle Care</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
