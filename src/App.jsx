import { CssBaseline } from "@mui/material";
import React from "react";
import { Cards } from "./components/Card";
import { Header } from "./components/Header";
import Paginations from "./components/Pagination";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Cards></Cards>
      <Paginations />
    </React.Fragment>
  );
}

export default App;
