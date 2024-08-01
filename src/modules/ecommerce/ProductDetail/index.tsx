import React, { useEffect } from 'react';
import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import AppAnimate from '@crema/components/AppAnimate';
import { useParams } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import Header from './Header';
import ProductView from './ProductView/index';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import { getProductDetail } from '../../../toolkit/actions';
import ProductImageSlide from './ProductImageSlide';
import SimilarProduct from './SimilarProduct';

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentProduct =  {
    imageUrl:'https://www.xparts.in/wp-content/uploads/2023/12/Google-Pixel-3-Display-With-Touchscreen.png',
    productName: "Product 5",
    description: "Description for Product 5",
    category: "Category 2",
    subCategory: "Sub Category B",
    size: "Large",
    price: "$18.00",
    quantity:10,
  }

  return (
    <>
      {currentProduct ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
          </AppCard>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;
