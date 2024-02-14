import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/Product";

type OrderContextValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  prefContact: string;
  products: Product[];
  onSetFirst: (first: string) => void;
  onSetLast: (last: string) => void;
  onSetEmail: (email: string) => void;
  onSetPhone: (phone: string) => void;
  onSetPref: (pref: string) => void;
  onAddProduct: () => void;
  onChangeFragrance: (id: number, newFragrance: string) => void;
};

const OrderContext = createContext<OrderContextValues>({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  prefContact: "",
  products: [],
  onSetFirst: () => undefined,
  onSetLast: () => undefined,
  onSetEmail: () => undefined,
  onSetPhone: () => undefined,
  onSetPref: () => undefined,
  onAddProduct: () => undefined,
  onChangeFragrance: () => undefined,
});

type props = {
  children: ReactNode;
};

export default function OrderContextProvider({ children }: props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [prefContact, setPrefContact] = useState<string>("Email");
  const [products, setProducts] = useState<Product[]>([
    { fragrance: "", id: 0, quantity: 1 },
  ]);

  function onSetFirst(first: string) {
    setFirstName(first);
  }

  function onSetLast(last: string) {
    setLastName(last);
  }

  function onSetEmail(email: string) {
    setEmail(email);
  }

  function onSetPhone(phone: string) {
    setPhoneNumber(phone);
  }

  function onSetPref(pref: string) {
    setPrefContact(pref);
  }

  function onAddProduct() {
    setProducts([
      ...products,
      {
        fragrance: "",
        id: products.length,
        quantity: 1,
      },
    ]);
  }

  function onChangeFragrance(id: number, newFragrance: string) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, fragrance: newFragrance };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }

  return (
    <OrderContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phoneNumber,
        prefContact,
        products,
        onSetFirst,
        onSetLast,
        onSetEmail,
        onSetPhone,
        onSetPref,
        onAddProduct,
        onChangeFragrance,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder can only be used inside OrderContextProvider");
  }

  return context;
}
