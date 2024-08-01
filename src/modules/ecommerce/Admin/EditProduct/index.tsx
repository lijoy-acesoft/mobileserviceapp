import React, { useEffect } from 'react';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import AddEditProduct from '../AddEditProduct';
import { useAppDispatch, useAppSelector } from '../../../../toolkit/hooks';
import { getProductDetail } from '../../../../toolkit/actions';

const ProductEditPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentProduct = useAppSelector(
    ({ ecommerce }) => ecommerce.currentProduct,
  );
  const loading = useAppSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(getProductDetail(id as string));
  }, [dispatch, id]);

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AddEditProduct selectedProd={currentProduct} />
    </AppAnimate>
  );
};
export default ProductEditPage;
