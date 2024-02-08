import { useState } from "react";

export default function Order() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [prefContact, setPrefContact] = useState<string>("Email");

  return (
    <section className="w-8/12 m-auto">
      <span className="text-2xl font-playfair">Order</span>
      <form>
        <div className="flex flex-wrap">
          <span className="basis-full">Name</span>
          <div className="flex gap-5 basis-full">
            <input
              type="text"
              name="firstName"
              className=" bg-slate-300 basis-1/2"
              placeholder="First"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              className=" bg-slate-300 basis-1/2"
              placeholder="Last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="basis-full">Contact Information</span>
          <div className="flex gap-5 basis-full">
            <input
              type="email"
              className="bg-slate-300 basis-1/2"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="bg-slate-300 basis-1/2"
              placeholder="Phone Number"
              value={phoneNumber}
              name="phone"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <span>Preferred method of communication:</span>
          <input
            type="radio"
            id="email"
            name="prefContact"
            value="Email"
            checked={prefContact === "Email"}
            onChange={(e) => setPrefContact(e.target.value)}
          />
          <label htmlFor="email">Email</label>
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
        <button className="w-full bg-red-300">Add Product</button>
      </form>
    </section>
  );
}
