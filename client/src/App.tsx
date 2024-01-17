import { Route, Routes } from "react-router-dom";
import Layout from "./lib/Layout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Fragrances from "./pages/Fragrances";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
