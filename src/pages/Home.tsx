import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <div className="xl:max-w-3xl2xl m-auto my-4 max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <section>
        <img src="/images/backgrounds/hero2.jpeg" />
      </section>
      <section id="favorites" className="mt-4">
        <Favorites />
      </section>
    </div>
  );
}
//w-11/12 md:w-10/12 lg:w-8/12
