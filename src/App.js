import React from "react";
import { BrowserRouter as Browse, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Profile from "./Components/Profile.jsx";
import Footer from "./Components/Footer.jsx";
import styled from "styled-components";

function App() {
  return (
    <Browse>
      <Route path={"#!"} />
      <Header />
      <Profile />
      <Footer />
    </Browse>
  );
}

export default App;
