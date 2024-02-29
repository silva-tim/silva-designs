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
    <section className="m-auto w-11/12">
      <div className="w-full border-b border-black py-3">
        <span className="font-playfair text-xl">Order</span>
      </div>
      <form>
        <div className="flex flex-wrap">
          <span className="basis-full py-2">Name</span>
          <div className="flex basis-full flex-wrap gap-5 sm:flex-nowrap">
            <input
              type="text"
              name="first"
              value={firstName}
              onChange={(e) => onSetFirst(e.target.value)}
              className="basis-full border border-black px-3 py-2"
              placeholder="First"
            />
            <input
              type="text"
              name="last"
              value={lastName}
              onChange={(e) => onSetLast(e.target.value)}
              className="basis-full border border-black px-3 py-2"
              placeholder="Last"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full py-2">Contact</span>
          <div className="flex basis-full flex-wrap gap-5 sm:flex-nowrap">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onSetEmail(e.target.value)}
              className="basis-full border border-black px-3 py-2"
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
      </form>
    </section>
  );
}

//testing
