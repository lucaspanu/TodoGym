import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import NavBar from "../../components/Navbar";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
