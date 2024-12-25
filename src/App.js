import About from "./AboutUs/About";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import Contactus from "./Contactus/Contactus";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Blogs />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
