import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/lab/Rating';
import { Fonts } from '@crema/constants/AppEnums';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { ProductDataType } from '@crema/types/models/ecommerce/EcommerceApp';

type HeaderProps = {
  product: any;
};

const Header: React.FC<HeaderProps> = ({ product }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        pb: 5,
        mb: 5,
        borderBottom: '1px solid #E5E4EA',
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          component='h3'
          sx={{
            color: 'text.primary',
            fontWeight: Fonts.BOLD,
            fontSize: 16,
            mb: 1,
          }}
        >
          {product.productName}
        </Box>
       
      </Box>


    </Box>
  );
};

export default Header;
