import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import Apply2 from "./Pages/Apply2";
import Apply3 from "./Pages/Apply3";
import Apply4 from "./Pages/Apply4";
import Apply5 from "./Pages/Apply5";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/apply2" element={<Apply2 />} />
      <Route path="/apply3" element={<Apply3 />} />
      <Route path="/apply4" element={<Apply4 />} />
      <Route path="/apply5" element={<Apply5 />} />
    </Routes>
  );
}

export default App;