import React from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Card,
  CardContent,
} from "@mui/material";

const MainForm = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField label="Tag Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Site" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="FAR Asset ID" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Manufacturer Serial Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Asset Category</InputLabel>
              <Select>
                <MenuItem value={1}>Category 1</MenuItem>
                <MenuItem value={2}>Category 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Building" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Asset Sub Category</InputLabel>
              <Select>
                <MenuItem value={1}>Sub Category 1</MenuItem>
                <MenuItem value={2}>Sub Category 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Floor" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select>
                <MenuItem value={1}>Product 1</MenuItem>
                <MenuItem value={2}>Product 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Room" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Product Description" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Location" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Tag Type" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Quantity" type="number" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MainForm;
