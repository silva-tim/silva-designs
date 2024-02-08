export default function Order() {
  return (
    <div className="w-8/12 m-auto">
      <span className="text-2xl font-playfair">Order</span>
      <form action="">
        <div className="flex flex-wrap">
          <span className="basis-full">Name</span>
          <div className="flex gap-5 basis-full">
            <input
              type="text"
              name=""
              id=""
              className=" bg-slate-300 basis-1/2"
              placeholder="First Name"
            />
            <input
              type="text"
              name=""
              id=""
              className=" bg-slate-300 basis-1/2"
              placeholder="Last Name"
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
            />
            <input
              type="tel"
              className="bg-slate-300 basis-1/2"
              placeholder="Phone Number"
            />
          </div>
          <span>Preferred method of communication:</span>
          <input type="radio" id="email" name="contact" />
          <label htmlFor="email">Email</label>
          <input type="radio" id="text" name="contact" />
          <label htmlFor="email">Text</label>
        </div>
        <button className="w-full bg-red-300">Add Product</button>
      </form>
    </div>
  );
}
