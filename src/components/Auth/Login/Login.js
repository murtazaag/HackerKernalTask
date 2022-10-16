import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
async function loginUser(credentials) {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "eve.holt@reqres.in" && password === "pistol") {
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
    }
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} mt={10}>
              <Grid item xs={12}>
                <Typography variant={"h4"} sx={{ fontWeight: "600" }}>
                  Login
                </Typography>
              </Grid>
              <Grid item xs={12} mt={4}>
                <FormLabel sx={{ fontWeight: "600" }}>
                  Username or email address *
                </FormLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  placeholder="test@gmail.com"
                  onChange={(e) => setUserName(e.target.value)}
                  sx={{
                    width: "100%",
                  }}
               
                />
              </Grid>
              <Grid item xs={12} mt={4}>
                <FormLabel sx={{ fontWeight: "600" }}>Password*</FormLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} mt={4}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    width: "100%",
                    height: "55px",
                  }}
                >
                  Log in
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
