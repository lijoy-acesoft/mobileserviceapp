import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../toolkit/hooks';
import ProductGrid from './ProductGrid';

import ProductList from './ProductList';
import { alpha, Box, Hidden } from '@mui/material';
import { onGetEcommerceData } from '../../../../toolkit/actions';

import ProductHeader from '../ProductHeader';
import { VIEW_TYPE } from '..';
import AppsPagination from '@crema/components/AppsPagination';
import { FilterDataType } from '@crema/types/models/ecommerce/EcommerceApp';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsFooter from '@crema/components/AppsContainer/AppsFooter';

type Props = {
  filterData: FilterDataType;
  setFilterData: (data: FilterDataType) => void;
  viewType: string;
  setViewType: (data: string) => void;
};

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}: Props) => {
  const dispatch = useAppDispatch();
  const { theme } = useThemeContext();
  const [page, setPage] = useState(0);

  const ecommerceList = useAppSelector(
    ({ ecommerce }) => ecommerce.ecommerceList,
  );
  const { list = [], total = 0 } = ecommerceList;
  const loading = useAppSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(onGetEcommerceData({ filterData, page }));
  }, [dispatch, filterData, page]);

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };

  const searchProduct = (title: string) => {
    setFilterData({ ...filterData, title });
  };
  return (
    <>
      <AppsHeader>
        <ProductHeader
          list={list}
          viewType={viewType}
          page={page}
          totalProducts={total}
          onPageChange={onPageChange}
          onSearch={searchProduct}
          setViewType={setViewType}
        />
      </AppsHeader>

      <AppsContent
        style={{
          backgroundColor: alpha(theme.palette.background.default, 0.6),
        }}
      >
        <Box
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            py: 2,
            px: 4,
            height: 1,
            '& > div': {
              width: '100%',
            },
          }}
        >
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={list} loading={loading} />
          ) : (
            <ProductList ecommerceList={list} loading={loading} />
          )}
        </Box>
      </AppsContent>
      <Hidden smUp>
        {list.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={total}
              rowsPerPage={10}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default ProductListing;
