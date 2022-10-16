import { Button, Grid } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";

const Logout = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
  };
  return (
    <>
      <Grid container mb={5} p={0.8} sx={{ backgroundColor: "blue" }}>
        <Grid item xs={12} textAlign="right">
          {" "}
          <Button
            onClick={handleLogout}
            variant="contained"
            startIcon={<LoginIcon />}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Logout;
