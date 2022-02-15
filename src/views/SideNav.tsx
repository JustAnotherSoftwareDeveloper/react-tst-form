import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { ISideNavStore } from "../store/side-nav-store";

export interface SideNavParams {
  sideNavStore: ISideNavStore;
}
export const SideNav = observer((params: SideNavParams) => {
  return (
    <Drawer
      anchor="left"
      open={params.sideNavStore.open}
      onClose={() => params.sideNavStore.toggleSideNav(false)}
    >
      <List>
        <ListItem>
          <Typography variant="h6">TST Form</Typography>
        </ListItem>
        <ListItemButton component={Link} to={"/input"}>
          <ListItemText>Input Data</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} to={"/results"}>
          <ListItemText>View Results</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
});
