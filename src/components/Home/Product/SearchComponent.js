import { Grid, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchComponent = ({ setQuery }) => {
  return (
    <Grid container mt={4} mb={3}>
      <Grid item xs={9}></Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search Product........"
          onChange={(event) => setQuery(event.target.value)}
          InputProps={{
            endAdornment: (
             
                <SearchIcon style={{ color: "blue" }} />
        
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchComponent;
