import { CssBaseline } from "@mui/material";
import React from "react";
import { Cards } from "./components/Card";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Cards></Cards>
    </>
  );
}

export default App;
