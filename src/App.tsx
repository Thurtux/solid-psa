import { Component } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from './components/HeroSection';

import Home from "./pages/Home";
import Services from "./pages/Services";

import "./index.css";


const App: Component = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Home />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
