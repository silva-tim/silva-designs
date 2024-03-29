import { FormEvent } from "react";
import ProductLine from "../components/ProductLine";
import { useOrder } from "../lib/OrderContext";
import emailjs from "@emailjs/browser";

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let fullOrder = ``;
    products.forEach(
      (product) =>
        (fullOrder +=
          "\n\nProduct: " +
          product.fragrance +
          "\nQuantity: " +
          product.quantity +
          "\nPrice: " +
          product.price +
          "\nGift: " +
          product.gift),
    );

    const publicKey = "TVcmhPJafk29wMXb9";
    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      order: fullOrder,
    };

    try {
      const sendMail = await emailjs.send(
        "service_btl2f4q",
        "template_1cb5c9n",
        templateParams,
        publicKey,
      );
      return sendMail;
    } catch (err) {
      console.error(err);
    }
  }

  let quantity = 0;
  products.forEach((product) => (quantity += product.quantity));

  let total = 0;
  products.forEach((product) => (total += product.price));

  return (
    <section className="m-auto w-11/12">
      <div className="w-full border-b border-black py-3">
        <span className="font-playfair text-xl">Order</span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-wrap">
          <span className="basis-full py-2">Name</span>
          <div className="flex basis-full flex-wrap sm:flex-nowrap sm:gap-5">
            <input
              type="text"
              name="first"
              value={firstName}
              onChange={(e) => onSetFirst(e.target.value)}
              className="basis-full border-x border-t border-black px-3 py-2 sm:border"
              placeholder="First"
            />
            <input
              type="text"
              name="last"
              value={lastName}
              onChange={(e) => onSetLast(e.target.value)}
              className="basis-full border border-black px-3 py-2 "
              placeholder="Last"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full py-2">Contact</span>
          <div className="flex basis-full flex-wrap sm:flex-nowrap sm:gap-5">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onSetEmail(e.target.value)}
              className="basis-full border-x border-t border-black px-3 py-2 sm:border"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              value={phoneNumber}
              onChange={(e) => onSetPhone(e.target.value)}
              className="basis-full border border-black px-3 py-2"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="flex flex-wrap divide-y">
          <span className="basis-full py-2">Products</span>
          {products.map((product) => (
            <div key={product.id} className="basis-full border-x border-black">
              <ProductLine item={product} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onAddProduct()}
          className="h-16 w-full border border-black"
        >
          Add Product
        </button>
        <div className="mt-5 flex flex-wrap justify-around">
          <span className="basis-full py-2 text-center font-playfair underline underline-offset-4">
            Order Summary
          </span>
          <span className="basis-1/2 py-2 text-center">
            Quantity: {quantity}
          </span>
          <span className="basis-1/2 py-2 text-center">Price: ${total}</span>
          <button
            type="submit"
            className="basis-full border border-black bg-green-300 p-2"
          >
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
}
