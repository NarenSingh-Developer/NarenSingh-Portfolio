import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;