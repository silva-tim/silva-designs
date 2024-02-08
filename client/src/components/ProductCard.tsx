export default function ProductCard() {
  return (
    <div className="flex flex-wrap justify-center bg-slate-300 basis-1/5">
      <div className="h-5/6 basis-full">
        <img
          src="/images/products/herbal_serenity.jpg"
          alt=""
          className="h-full m-auto"
        />
      </div>
      <span>Herbal Serenity</span>
    </div>
  );
}
