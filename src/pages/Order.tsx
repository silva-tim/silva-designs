import { Fragment } from "react";
import ProductLine from "../components/ProductLine";
import { useOrder } from "../lib/OrderContext";

export default function Order() {
  const {
    firstName,
    onSetFirst,
    lastName,
    onSetLast,
    email,
    onSetEmail,
    phoneNumber,
    onSetPhone,
    products,
    onAddProduct,
  } = useOrder();

  return (
    <section className="m-auto w-8/12">
      <div className="w-full border-b border-black py-3">
        <span className="font-playfair text-2xl">Order</span>
      </div>
      <form>
        <div className="flex flex-wrap">
          <span className="basis-full py-2 text-lg">Name</span>
          <div className="flex basis-full gap-5">
            <input
              type="text"
              name="first"
              value={firstName}
              onChange={(e) => onSetFirst(e.target.value)}
              className="basis-1/2 border border-black px-3 py-2"
            />
            <input
              type="text"
              name="last"
              value={lastName}
              onChange={(e) => onSetLast(e.target.value)}
              className="basis-1/2 border border-black px-3 py-2"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full py-2 text-lg">Contact</span>
          <div className="flex basis-full gap-5">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onSetEmail(e.target.value)}
              className="basis-1/2 border border-black px-3 py-2"
            />
            <input
              type="tel"
              name="phone"
              value={phoneNumber}
              onChange={(e) => onSetPhone(e.target.value)}
              className="basis-1/2 border border-black px-3 py-2"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full py-2 text-lg">
            Preferred method of contact?
          </span>

          <input type="radio" name="pref" />
          <input type="radio" name="pref" />
        </div>
        <div>
          {products.map((product) => (
            <Fragment key={product.id}>
              <ProductLine item={product} />
            </Fragment>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onAddProduct()}
          className="h-16 w-full border border-black"
        >
          Add Product
        </button>
      </form>
    </section>
  );
}
