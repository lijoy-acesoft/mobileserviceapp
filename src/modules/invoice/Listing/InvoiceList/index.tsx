import React, { useEffect, useState } from 'react';
import InvContentHeader from './InvContentHeader';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import InvoiceTable from '../../InvoiceTable';
import { useLocation, useParams } from 'react-router-dom';
import { onGetInvoiceList, onUpdateInvoice } from '../../../../toolkit/actions';
import { useAppDispatch, useAppSelector } from '../../../../toolkit/hooks';
import { InvoiceType } from '@crema/types/models/invoice';

const InvoiceList = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const loading = useAppSelector(({ common }) => common.loading);

  const [page, setPage] = useState(0);

  const invoiceList = useAppSelector(
    ({ invoiceApp }) => invoiceApp.invoiceList,
  );

  useEffect(() => {
    dispatch(onGetInvoiceList({ folder: params?.folder, page: page }));
  }, [dispatch, page, pathname]);

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };
  const [filterText, onSetFilterText] = useState('');

  const [checkedInvs, setCheckedInvs] = useState<number[]>([]);

  const onChangeStatus = (invoice: InvoiceType, status: number) => {
    dispatch(onUpdateInvoice({ ...invoice, folderValue: status }));
  };
  return (
    <>
      <AppsHeader>
        <InvContentHeader
          page={page}
          invoiceList={invoiceList || []}
          checkedInvs={checkedInvs}
          setCheckedInvs={setCheckedInvs}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
        />
      </AppsHeader>
      <AppsContent>
        <InvoiceTable
          invoiceData={invoiceList || []}
          loading={loading}
          onChangeStatus={onChangeStatus}
        />
      </AppsContent>
    </>
  );
};

export default InvoiceList;
