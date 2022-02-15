import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { Main } from "./views/Main";

import { SideNavStore } from "./store/side-nav-store";
function App() {
  return (
    <Box sx={{ display: "flex", flexGrow: 1, height: "100vh" }}>
      <Main sideNavStore={SideNavStore}></Main>
    </Box>
  );
}

export default App;
