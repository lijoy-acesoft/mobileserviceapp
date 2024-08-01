import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

type ProductInfoProps = {
  productInfo: {
    imageUrl: string;
    productName: string;
    description: string;
    category: string;
    subCategory: string;
    size: string;
    price: string;
    quantity: number;
  };
  // onUpdate: (updatedProduct: any) => void; // Callback for updating product info
};

const categories = ['Electronics', 'Clothing', 'Home Goods'];
const subCategories = {
  Electronics: ['Phones', 'Laptops', 'Accessories'],
  Clothing: ['Men', 'Women', 'Kids'],
  'Home Goods': ['Furniture', 'Kitchenware', 'Decor']
};

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localProductInfo, setLocalProductInfo] = useState(productInfo);
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalProductInfo({
      ...localProductInfo,
      [name]: value,
    });
  };

  const handleSelectChange = (e: any, field: 'category' | 'subCategory') => {
    const value = e.target.value as string;
    setLocalProductInfo({
      ...localProductInfo,
      [field]: value,
    });
  };

  const handleSave = () => {
    // onUpdate(localProductInfo); // Call parent callback to save changes
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalProductInfo(productInfo); // Reset to original product info
    setIsEditing(false);
  };

  return (
    <>
      <Box
        component='h3'
        sx={{
          color: 'text.primary',
          fontSize: 16,
          mt: 4,
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Product Details
        <Button onClick={handleEditToggle} variant="contained" color="primary">
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </Box>
      <Grid container spacing={3}>
        {Object.entries({
          'Product Name': 'productName',
          Description: 'description',
          Category: 'category',
          'Sub Category': 'subCategory',
          Size: 'size',
          Price: 'price',
          Quantity: 'quantity',
        }).map(([label, key]) => (
          <React.Fragment key={key}>
            <Grid item xs={4}>
              <Box
                sx={{
                  color: 'text.secondary',
                  pr: 2,
                }}
              >
                {label}
              </Box>
            </Grid>
            <Grid item xs={8}>
              {isEditing && key === 'category' ? (
                <Select
                  fullWidth
                  name="category"
                  value={localProductInfo.category}
                  onChange={(e) => handleSelectChange(e, 'category')}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              ) : isEditing && key === 'subCategory' ? (
                <Select
                  fullWidth
                  name="subCategory"
                  value={localProductInfo.subCategory}
                  onChange={(e) => handleSelectChange(e, 'subCategory')}
                >
                  {(subCategories[localProductInfo.category] || []).map((sub) => (
                    <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                  ))}
                </Select>
              ) : isEditing ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  name={key}
                  value={localProductInfo[key]}
                  onChange={handleInputChange}
                />
              ) : (
                <Box>{localProductInfo[key]}</Box>
              )}
            </Grid>
          </React.Fragment>
        ))}
        {isEditing && (
          <Grid item xs={12}>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductInfo;
