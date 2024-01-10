import { Route, Routes } from "react-router-dom";
import Layout from "./lib/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/products" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
