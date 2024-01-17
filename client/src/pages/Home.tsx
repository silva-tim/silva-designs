import { useEffect } from "react";
import Favorites from "../components/Favorites";
import { getFavorites } from "../lib/Api";

export default function Home() {
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="w-10/12 m-auto">
      <div>
        <img src="/images/backgrounds/hero.jpg" alt="" />
      </div>
      <Favorites />
    </div>
  );
}
