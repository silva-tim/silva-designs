import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <div className="m-auto my-4 w-11/12">
      <section>
        <img src="/images/backgrounds/hero2.jpeg" alt="" />
      </section>
      <section id="favorites" className="mt-4">
        <Favorites />
      </section>
    </div>
  );
}
