import React, { useState } from "react";
import {
  Drawer,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import AppTextField from "@crema/components/AppFormComponents/AppTextFieldSmall";
import AppTextArea from "@crema/components/AppFormComponents/AppTextArea";
import AppGridContainer from "@crema/components/AppGridContainer";

interface ProductDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ProductDrawer = ({ open, onClose }: ProductDrawerProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 800, padding: 5 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <h2>Product Info</h2>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="product tabs"
        >
          <Tab label="Main" sx={{ textTransform: "none" }} />
          <Tab label="Dynamic Attributes" sx={{ textTransform: "none" }} />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <MainForm handleAddClose={() => onClose()} />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <DynamicAttributesForm />
        </TabPanel>
      </Box>
    </Drawer>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
interface FormProps {
  handleAddClose: () => void;
}

const MainForm: React.FC<FormProps> = ({ handleAddClose }) => (
  <Formik
    initialValues={{
      site: "",
      serialNumber: "",
      category: "",
      subcategory: "",
      product: "",
      description: "",
      quantity: 1,
      purchasePrice: "",
      brand: "",
      model: "",
      assetStatus: "",
      owner: "",
      employee: "",
      location: "",
      assetCondition: "",
      tagType: "RFID",
      tagNumber: "",
    }}
    onSubmit={(values) => {
      console.log(values);
      handleAddClose();
    }}
  >
    {({ values, setFieldValue }) => (
      <Form noValidate autoComplete="off">
        <AppGridContainer spacing={5} mt={1}>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Site"
              name="site"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Serial Number"
              name="serialNumber"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Category</InputLabel>
              <Field name="category" as={Select} label="Category">
                <MenuItem value="Category1">Category1</MenuItem>
                <MenuItem value="Category2">Category2</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Subcategory</InputLabel>
              <Field name="subcategory" as={Select} label="Subcategory">
                <MenuItem value="Subcategory1">Subcategory1</MenuItem>
                <MenuItem value="Subcategory2">Subcategory2</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <AppTextField
              label="Product"
              name="product"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} mb={2}>
            <AppTextArea
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Quantity"
              name="quantity"
              variant="outlined"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Purchase Price"
              name="purchasePrice"
              variant="outlined"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Brand"
              name="brand"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Model"
              name="model"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Asset Status</InputLabel>
              <Field name="assetStatus" as={Select} label="Asset Status">
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Owner</InputLabel>
              <Field name="owner" as={Select} label="Owner">
                <MenuItem value="Owner1">Owner1</MenuItem>
                <MenuItem value="Owner2">Owner2</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Employee</InputLabel>
              <Field name="employee" as={Select} label="Employee">
                <MenuItem value="Employee1">Employee1</MenuItem>
                <MenuItem value="Employee2">Employee2</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Location</InputLabel>
              <Field name="location" as={Select} label="Location">
                <MenuItem value="Location1">Location1</MenuItem>
                <MenuItem value="Location2">Location2</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Asset Condition</InputLabel>
              <Field name="assetCondition" as={Select} label="Asset Condition">
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Used">Used</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel>Tag Type</InputLabel>
              <Field name="tagType" as={Select} label="Tag Type">
                <MenuItem value="RFID">RFID</MenuItem>
                <MenuItem value="Barcode">Barcode</MenuItem>
              </Field>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <AppTextField
              label="Tag Number"
              name="tagNumber"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </AppGridContainer>
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
            sx={{ position: "relative", minWidth: 100 }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
          <Button
            sx={{ position: "relative", minWidth: 100 }}
            onClick={handleAddClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Form>
    )}
  </Formik>
);

const DynamicAttributesForm: React.FC = () => (
  <Box
    component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
  >
    {/* Add fields for Dynamic Attributes */}
  </Box>
);

export default ProductDrawer;
