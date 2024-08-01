import React, { useState } from "react";
import { Tabs, Tab, Box, Card, CardContent } from "@mui/material";
import MainForm from "./MainForm";
import { Fonts } from "@crema/constants/AppEnums";
// import ProductDetailsForm from './ProductDetailsForm';
// import FinanceAccountingForm from './FinanceAccountingForm';
// import ImageForm from './ImageForm';
// import DynamicAttributesForm from './DynamicAttributesForm';

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        component="h2"
        sx={{
          fontSize: 16,
          color: "text.primary",
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        Register New Asset
      </Box>
      <Card sx={{ my: 2, p: 2 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Main" />
          <Tab label="Product Details" />
          <Tab label="Finance Accounting" />
          <Tab label="Image" />
          <Tab label="Dynamic Attributes" />
        </Tabs>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          {value === 0 && <MainForm />}
          {/* {value === 1 && <ProductDetailsForm />}
          {value === 2 && <FinanceAccountingForm />}
          {value === 3 && <ImageForm />}
          {value === 4 && <DynamicAttributesForm />} */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TabComponent;
