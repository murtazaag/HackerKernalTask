import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function CreateComponent({ getAllData }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const product = {
        productName,
        price,
      };
      getAllData(product);
      setProductName("");
      setPrice("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <TextField
            placeholder="Product"
            fullWidth
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            placeholder="Price"
            fullWidth
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{ p: "15px" }}
            type="submit"
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
