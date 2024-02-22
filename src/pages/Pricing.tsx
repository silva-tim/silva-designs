export default function Pricing() {
  return (
    <section className="m-auto w-8/12">
      <div className="w-full border-b border-black py-3">
        <span className="font-playfair text-2xl">Pricing & Info</span>
      </div>
      <div className="flex flex-wrap justify-center text-lg">
        <span className="basis-full pt-5 text-center text-lg underline">
          Information & Ingredients
        </span>
        <p className="basis-2/3 py-2 text-center">
          Each candle is handmade to order and contains only U.S. made
          ingredients including 100% phthalate free fragrances and an
          all-natural coconut wax that emits no carcinogens.
        </p>
        <span className="basis-full pt-5 text-center text-lg underline">
          Pricing
        </span>
        <p className="basis-2/3 py-2 text-center">
          All fragrances start at $25 for a 16 oz. matte black candle jar &
          bamboo lid. Candles have an approximate 16 hour burn time with proper
          use.
        </p>
        <p className="basis-2/3 py-2 text-center">
          Every fragance has the option of being upgraded to a gift for $5 more.
          Gifts will come with the candle jar presented in a gift ready black
          box with a white bow. It also includes a complimentary bottle of
          matchsticks.
        </p>
      </div>
    </section>
  );
}
