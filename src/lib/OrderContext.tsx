import { createContext, useContext, useState } from "react";

export const OrderContext = createContext(null);

export default function OrderContext({ children }) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [prefContact, setPrefContact] = useState<string>("Email");

  return <OrderContext.Provider>{children}</OrderContext.Provider>;
}
