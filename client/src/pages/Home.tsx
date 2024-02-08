import { useEffect } from "react";
import Favorites from "../components/Favorites";
import { getFavorites } from "../lib/Api";

export default function Home() {
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="w-10/12 m-auto">
      <section>
        <img src="/images/backgrounds/hero2.jpeg" alt="" />
      </section>
      <section id="favorites" className="mt-20">
        <Favorites />
      </section>
    </div>
  );
}
