import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Form } from "formik";
import { Fonts } from "@crema/constants/AppEnums";
import AppTextField from "@crema/components/AppFormComponents/AppTextFieldSmall";
import AppGridContainer from "@crema/components/AppGridContainer";
import { Clear } from "@mui/icons-material";

type Props = {
  values: any;
  setFieldValue: (name: string, value: any) => void;
  handleAddClose: () => void;
};

const categories = [
  { id: "cat1", name: "Category 1" },
  { id: "cat2", name: "Category 2" },
];

const subCategories = {
  cat1: [
    { id: "subCat1A", name: "Sub Category 1A" },
    { id: "subCat1B", name: "Sub Category 1B" },
  ],
  cat2: [
    { id: "subCat2A", name: "Sub Category 2A" },
    { id: "subCat2B", name: "Sub Category 2B" },
  ],
};

const CreateProductForm = (props: Props) => {
  const { values, setFieldValue, handleAddClose } = props;
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (values.category) {
      setFilteredSubCategories(subCategories[values.category] || []);
    } else {
      setFilteredSubCategories([]);
    }
  }, [values.category]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10 MB
      setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size should be less than 10 MB");
    }
  };

  const handleClearImage = () => {
    setFieldValue("image", null);
    setImagePreview(null);
  };

  return (
    <Form noValidate autoComplete="off">
      <Box
        sx={{
          padding: 5,
          ml: -6,
          mr: -6,
          maxHeight: 'calc(100vh - 200px)', // Adjust this value as needed
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            pt: 5,
            pb: 3,
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box
            component="h6"
            sx={{
              mb: { xs: 4, xl: 6 },
              fontSize: 20,
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <Typography variant="h3" fontWeight={600}>
              Create Product
            </Typography>
          </Box>

          <div>
            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Product Name"}
                  name="productName"
                  value={values.productName}
                  onChange={(e) => setFieldValue("productName", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Description"}
                  name="description"
                  value={values.description}
                  onChange={(e) => setFieldValue("description", e.target.value)}
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                >
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    name="category"
                    value={values.category}
                    onChange={(e) => setFieldValue("category", e.target.value)}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="outlined"
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  disabled={!values.category}
                >
                  <InputLabel>Sub Category</InputLabel>
                  <Select
                    label="Sub Category"
                    name="subCategory"
                    value={values.subCategory}
                    onChange={(e) => setFieldValue("subCategory", e.target.value)}
                  >
                    {filteredSubCategories.map((subCategory) => (
                      <MenuItem key={subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Size"}
                  name="size"
                  value={values.size}
                  onChange={(e) => setFieldValue("size", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Price"}
                  name="price"
                  value={values.price}
                  onChange={(e) => setFieldValue("price", e.target.value)}
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Quantity"}
                  name="quantity"
                  value={values.quantity}
                  onChange={(e) => setFieldValue("quantity", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppTextField
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                  variant="outlined"
                  label={"Threshold"}
                  name="threshold"
                  value={values.threshold}
                  onChange={(e) => setFieldValue("threshold", e.target.value)}
                />
              </Grid>
            </AppGridContainer>

            <AppGridContainer spacing={5}>
              <Grid item xs={12} md={12}>
                <FormControl
                  sx={{
                    width: "100%",
                    mb: { xs: 4, xl: 6 },
                  }}
                >
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      fullWidth
                    >
                      Upload Image
                    </Button>
                  </label>
                </FormControl>
                {imagePreview && (
                  <Card
                    sx={{
                      mt: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 2,
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imagePreview}
                      alt="Product Image Preview"
                      sx={{ height: 100, width: 100, objectFit: 'cover' }}
                    />
                    <IconButton
                      sx={{ mt: 1 }}
                      onClick={handleClearImage}
                      color="error"
                    >
                      <Clear />
                    </IconButton>
                  </Card>
                )}
              </Grid>
            </AppGridContainer>
          </div>
        </Box>
      </Box>

      <Box
        sx={{
          pb: 4,
          mx: -1,
          textAlign: "right",
          display: "flex",
          justifyContent: "flex-end",
          gap: 3,
        }}
      >
        <Button
          sx={{
            position: "relative",
            minWidth: 100,
          }}
          color="primary"
          variant="contained"
          type="submit"
        >
          Create
        </Button>
        <Button
          sx={{
            position: "relative",
            minWidth: 100,
          }}
          onClick={handleAddClose}
          color="primary"
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
    </Form>
  );
};

export default CreateProductForm;
