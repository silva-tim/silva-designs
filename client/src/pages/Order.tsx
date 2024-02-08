export default function Order() {
  return (
    <div className="w-8/12 m-auto">
      <span className="text-2xl font-playfair">Order</span>
      <form action="">
        <div className="flex flex-wrap">
          <span className="basis-full">Name</span>
          <div className="flex justify-between gap-5 basis-full">
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
          <span className="basis-full">Email Address</span>
          <input type="email" className="bg-slate-300 basis-full" />
        </div>
      </form>
    </div>
  );
}
