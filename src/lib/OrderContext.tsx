import { createContext, ReactNode, useContext, useState } from "react";

type OrderContextValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  prefContact: string;
  onSetFirst: (first: string) => void;
  onSetLast: (last: string) => void;
  onSetEmail: (email: string) => void;
  onSetPhone: (phone: string) => void;
  onSetPref: (pref: string) => void;
};

const OrderContext = createContext<OrderContextValues>({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  prefContact: "",
  onSetFirst: () => undefined,
  onSetLast: () => undefined,
  onSetEmail: () => undefined,
  onSetPhone: () => undefined,
  onSetPref: () => undefined,
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

  return (
    <OrderContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phoneNumber,
        prefContact,
        onSetFirst,
        onSetLast,
        onSetEmail,
        onSetPhone,
        onSetPref,
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
