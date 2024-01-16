import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <div className="w-10/12 m-auto">
      <div>
        <img src="/images/backgrounds/hero.jpg" alt="" />
      </div>
      <Favorites />
    </div>
  );
}
