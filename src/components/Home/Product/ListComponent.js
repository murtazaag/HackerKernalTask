import {
  Card,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const ListComponent = ({ product, deleteProduct }) => {
  return (
    <div>
      <Card sx={{ marginTop: "0.5rem" }}>
        <Grid container px={0.5}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid>
              <Typography>{product.productName}</Typography>
            </Grid>
            <Grid>
              <Typography>{product.price}</Typography>
            </Grid>
            <Grid>
              <IconButton onClick={() => deleteProduct(product)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ListComponent;
