import React from 'react';
import { Box } from '@mui/material';
import AppAnimate from '@crema/components/AppAnimate';
import OrderPlaced from './OrderPlaced';
import AddressInfo from './AddressInfo';
import ItemsList from './ItemsList';
import { useAppSelector } from '../../../toolkit/hooks';
import { addresses } from '@crema/mockapi/fakedb';

const Confirmation = () => {
  const cartItems = useAppSelector(({ ecommerce }) => ecommerce.cartItems);
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
        <OrderPlaced cartItems={cartItems} />
        <AddressInfo address={addresses[0]} />
        <ItemsList cartItems={cartItems} />
      </Box>
    </AppAnimate>
  );
};

export default Confirmation;
