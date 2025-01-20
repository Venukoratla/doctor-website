import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Blogs from "./Blogs/Blogs";
import BlogDetail from "./Blogs/BlogDetail";

import ServiceViewDetail from "./components/ServiceViewDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog-detail/:id" element={<BlogDetail />} />
        <Route path="service-detail/:id" element={<ServiceViewDetail />} />
      </Routes>
    </div>
  );
}

export default App;
