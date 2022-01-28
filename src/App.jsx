import { CssBaseline } from "@mui/material";
import React from "react";
import { Cards } from "./components/Card";
import  Header  from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Cards/>
    </React.Fragment>
  );
}

export default App;
