import React, { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../../../toolkit/hooks';
import { addItemToCart } from '../../../../toolkit/actions';
import { ProductDataType } from '@crema/types/models/ecommerce/EcommerceApp';

const ProductImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    maxWidth: '100%',
    maxHeight: 600,
    objectFit: 'cover',
  },
  '& .favorite-icon': {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    color: theme.palette.warning.main,
  },
}));

type Props = {
  product: ProductDataType;
};

const ProductImageSlide = ({ product }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);




  return (
    <Grid item sm={12} md={4}>
      <ProductImageContainer>
        <img src={product.imageUrl} alt={product.productName} />
      </ProductImageContainer>
    </Grid>
  );
};

export default ProductImageSlide;
