import React from "react";

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
//import logo from "./logo.svg";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Salu2 a to2" />
    </>
  );
}

export default App;
