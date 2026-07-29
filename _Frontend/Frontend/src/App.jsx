import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Form1 from "./Pages/form1";
import Apply2 from "./Pages/form2";
import Apply3 from "./Pages/form3";
import Apply4 from "./Pages/form4";
import Apply5 from "./Pages/submitted_form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form1" element={<Form1 />} />
      <Route path="/form2" element={<Apply2 />} />
      <Route path="/form3" element={<Apply3 />} />
      <Route path="/form4" element={<Apply4 />} />
      <Route path="/submitted_form" element={<Apply5 />} />
    </Routes>
  );
}

export default App;