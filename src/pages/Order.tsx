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
          <span className="basis-full">Name</span>
          <input
            type="text"
            name="first"
            value={firstName}
            onChange={(e) => onSetFirst(e.target.value)}
          />
          <input
            type="text"
            name="last"
            value={lastName}
            onChange={(e) => onSetLast(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full">Contact</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onSetEmail(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            value={phoneNumber}
            onChange={(e) => onSetPhone(e.target.value)}
          />
        </div>
        <div>
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
        <button type="button" onClick={() => onAddProduct()}>
          Add Product
        </button>
      </form>
    </section>
  );
}
