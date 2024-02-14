import { useEffect, useState } from "react";
import { Candle } from "../types/Candle";
import { getCandles } from "../lib/Api";
import ProductLine from "../components/ProductLine";

export default function Order() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [prefContact, setPrefContact] = useState<string>("Email");
  const [candles, setCandles] = useState<Candle[]>();
  const [products, setProducts] = useState<Candle[]>([
    {
      name: "test",
      id: "0",
      price: 1,
      image: "",
      alt: "",
      desc: "hi",
      favorite: false,
    },
  ]);

  useEffect(() => {
    setCandles(getCandles());
  }, []);

  function handleAddProduct() {
    setProducts([
      ...products,
      {
        name: "test",
        id: "0",
        price: 1,
        image: "",
        alt: "",
        desc: "hi",
        favorite: false,
      },
    ]);
  }

  return (
    <section className="m-auto w-8/12">
      <div className="mb-5 w-full border-b border-black py-3">
        <span className="font-playfair text-2xl">Order</span>
      </div>
      <form className="px-2" id="order">
        <div className="mb-2 flex flex-wrap">
          <span className="basis-full">Name</span>
          <div className="flex basis-full gap-5">
            <input
              type="text"
              name="firstName"
              className="basis-1/2 p-2 outline outline-1"
              placeholder="First"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              className="basis-1/2 p-2 outline outline-1"
              placeholder="Last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap">
          <span className="basis-full">Contact Information</span>
          <div className="flex basis-full gap-5">
            <input
              type="email"
              className="basis-1/2 p-2 outline outline-1"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="basis-1/2 p-2 outline outline-1"
              placeholder="Phone Number"
              value={phoneNumber}
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <span className="me-2">Preferred method of communication: </span>
          <input
            type="radio"
            id="email"
            name="prefContact"
            value="Email"
            checked={prefContact === "Email"}
            onChange={(e) => setPrefContact(e.target.value)}
          />
          <label htmlFor="email" className="me-2">
            Email
          </label>
          <input
            type="radio"
            id="phone"
            name="prefContact"
            value="Text"
            checked={prefContact === "Text"}
            onChange={(e) => setPrefContact(e.target.value)}
          />
          <label htmlFor="phone">Text</label>
        </div>
        {products.map((product) => (
          <ProductLine
            key={Number(product.id)}
            candles={candles}
            product={product}
            handleChange={setProducts}
          />
        ))}
        <button
          type="button"
          onClick={handleAddProduct}
          className="h-12 w-full border border-black"
        >
          Add Product
        </button>
      </form>
    </section>
  );
}
