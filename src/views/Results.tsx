import { Box, Card, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { IFormDataStore } from "../store/form-data-store";

export interface ResultsParams {
  formDataStore: IFormDataStore;
}
export const Results = observer((params: ResultsParams) => {
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
            <Typography variant="h5">Form Data Results</Typography>
          </Grid>
          <Grid item xs={12}>
            Name: {params.formDataStore.userName}
          </Grid>
          <Grid item xs={12}>
            Password: {params.formDataStore.password}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
});
