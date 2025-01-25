import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

import ServiceViewDetail from "./components/ServiceViewDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service-detail/:id" element={<ServiceViewDetail />} />
      </Routes>
    </div>
  );
}

export default App;
