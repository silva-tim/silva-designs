import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <div className="w-10/12 m-auto">
      <div className="">
        <img src="/images/backgrounds/candle.jpeg" alt="" />
      </div>
      <Favorites />
    </div>
  );
}
