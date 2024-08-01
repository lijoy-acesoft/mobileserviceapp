import React, { useEffect } from 'react';
import AddInvoice from './AddInvoice';
import { useNavigate } from 'react-router-dom';
import {
  onAddInvoice,
  onGetClientList,
  onGetInvoiceList,
  onGetInvoiceSettings,
} from '../../../toolkit/actions';
import { InvoiceSettingType, InvoiceType } from '@crema/types/models/invoice';
import { useAppDispatch, useAppSelector } from 'toolkit/hooks';

const AddInvoicePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const invoiceSettings = useAppSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );
  const clientsList = useAppSelector(
    ({ invoiceApp }) => invoiceApp.clientsList,
  );
  const invoiceList = useAppSelector(
    ({ invoiceApp }) => invoiceApp.invoiceList,
  );

  useEffect(() => {
    dispatch(onGetInvoiceList({ folder: undefined, page: 0 }));
    dispatch(onGetClientList());
    dispatch(onGetInvoiceSettings());
  }, [dispatch]);

  const onSave = (invoice: InvoiceType) => {
    dispatch(onAddInvoice(invoice));

    navigate('/invoice/home');
  };

  return clientsList && invoiceList?.length ? (
    <AddInvoice
      clientsList={clientsList}
      totalCount={invoiceList?.length || 0}
      invoiceSettings={invoiceSettings as InvoiceSettingType}
      onSave={onSave}
    />
  ) : null;
};

export default AddInvoicePage;
