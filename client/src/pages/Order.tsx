import { useState } from "react";
import ProductLine from "../components/ProductLine";

export default function Order() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [prefContact, setPrefContact] = useState<string>("Email");

  return (
    <section className="w-8/12 m-auto">
      <div className="w-full py-3 mb-5 border-b border-black">
        <span className="text-2xl font-playfair">Order</span>
      </div>
      <form className="px-2">
        <div className="flex flex-wrap mb-2">
          <span className="basis-full">Name</span>
          <div className="flex gap-5 basis-full">
            <input
              type="text"
              name="firstName"
              className="p-2 outline outline-1 basis-1/2"
              placeholder="First"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              className="p-2 outline outline-1 basis-1/2"
              placeholder="Last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <span className="basis-full">Contact Information</span>
          <div className="flex gap-5 basis-full">
            <input
              type="email"
              className="p-2 basis-1/2 outline outline-1"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="p-2 outline outline-1 basis-1/2"
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
        <ProductLine />
        <button className="w-full h-12 outline outline-1">Add Product</button>
      </form>
    </section>
  );
}
