import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { TSTFormInput } from "./TSTFormInput";
import { Results } from "./Results";
import { ISideNavStore } from "../store/side-nav-store";
import { observer } from "mobx-react";
import { SideNav } from "./SideNav";
import { FormDataStore } from "../store/form-data-store";
interface MainParameters {
  sideNavStore: ISideNavStore;
}
export const Main = observer((parameters: MainParameters) => {
  return (
    <Router>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => parameters.sideNavStore.toggleSideNav(true)}
              >
                <MenuIcon></MenuIcon>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                TST Form
              </Typography>
            </Toolbar>
          </AppBar>
          <SideNav sideNavStore={parameters.sideNavStore}></SideNav>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route path="/">
              <Route
                path="input"
                element={
                  <TSTFormInput formDataStore={FormDataStore}></TSTFormInput>
                }
              ></Route>
              <Route
                path="results"
                element={<Results formDataStore={FormDataStore}></Results>}
              ></Route>
              <Route index element={<Navigate to="input"></Navigate>}></Route>
            </Route>
          </Routes>
        </Box>
      </Box>
    </Router>
  );
});
