import { Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const ListHeaderComponent = () => {
  return (
    <Paper>
      <Grid container px={1} py={1}>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Grid>
            <Typography>ProductName</Typography>
          </Grid>
          <Grid>
            <Typography>Price</Typography>
          </Grid>
          <Grid>
            <Typography>Delete</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListHeaderComponent;
