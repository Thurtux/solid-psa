import { Component } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";


const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />

      <Footer />
    </div>
  );
};

export default App;
