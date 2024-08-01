import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ProductSpecification from './ProductSpecification';
import ProductInfo from './ProductInfo';
import DeliveryInfo from './DeliveryInfo';
import Reviews from './Reviews';
import AvailableOffers from './AvailableOffers';
import { ProductDataType } from '@crema/types/models/ecommerce/EcommerceApp';

type ProductViewProps = {
  product: any;
};

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <Grid item sm={12} md={8}>
      <Box
        component='h3'
        sx={{
          color: 'text.primary',
          fontSize: 20,
          mb: 1,
        }}
      >
        {product.price}
      </Box>
      <Box
        sx={{
          color: 'primary.main',
          fontSize: 16,
          mb: 1,
        }}
      >
        In stock
      </Box>
      <Box
        sx={{
          color: 'primary.main',
          fontSize: 16,
          mb: 4,
        }}
      >
        {product.quantity} piece availabe
      </Box>
      <Box
        component='p'
        sx={{
          color: 'text.secondary',
        }}
      >
        {product.description || 'No description found'}
      </Box>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductInfo productInfo={product} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
    </Grid>
  );
};

export default ProductView;
