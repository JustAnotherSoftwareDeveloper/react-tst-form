import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IFormDataStore } from "../store/form-data-store";

export interface TSTFormInputParameters {
  formDataStore: IFormDataStore;
}
export const TSTFormInput = observer((params: TSTFormInputParameters) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const submitData = () => {
    params.formDataStore.setUserName(name);
    params.formDataStore.setPassword(password);
    setName("");
    setPassword("");
    setConfirmPassword("");
    navigate("/results");
  };
  const userNameValid = () => name;
  const passwordsExist = () => password && confirmPassword;
  const passwordsMatch = () => password === confirmPassword;
  const allValid = () =>
    userNameValid() && passwordsExist() && passwordsMatch();
  const renderValidationInfo = () => {
    const renderItems = [];
    if (!userNameValid()) {
      renderItems.push(
        <Grid item xs={12}>
          User name must be filled
        </Grid>
      );
    }
    if (!passwordsExist()) {
      renderItems.push(
        <Grid item xs={12}>
          Passwords must be filled
        </Grid>
      );
    }
    if (!passwordsMatch()) {
      renderItems.push(
        <Grid item xs={12}>
          Passwords must match
        </Grid>
      );
    }
    if (allValid()) {
      renderItems.push(
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => submitData()}>
            Submit
          </Button>
        </Grid>
      );
    }
    return renderItems;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5vh",
      }}
    >
      <Card
        sx={{
          width: "50%",
        }}
        variant="outlined"
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">Input Form Data</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Input Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="password"
              required
              label="Input Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="password"
              required
              variant="standard"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></TextField>
          </Grid>
          {renderValidationInfo()}
        </Grid>
      </Card>
    </Box>
  );
});
