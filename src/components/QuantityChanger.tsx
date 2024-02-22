import { useOrder } from "../lib/OrderContext";
import { Product } from "../types/Product";

type props = {
  item: Product;
};

export default function QuantityChanger({ item }: props) {
  const { onChangeQuantity } = useOrder();

  return (
    <div className="flex h-10 rounded-sm border border-black bg-slate-300">
      <button
        onClick={() => onChangeQuantity(item.id, item.quantity - 1)}
        type="button"
        className="w-10 border-r border-black"
      >
        -
      </button>
      <span className="flex w-10 items-center justify-center">
        {item.quantity}
      </span>
      <button
        type="button"
        onClick={() => onChangeQuantity(item.id, item.quantity + 1)}
        className="w-10 border-l border-black"
      >
        +
      </button>
    </div>
  );
}
