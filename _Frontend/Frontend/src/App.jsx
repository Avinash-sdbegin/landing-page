import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Apply from "./Pages/Apply";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
    </Routes>
  );
}

export default App;