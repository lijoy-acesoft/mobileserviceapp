import React, { useEffect } from 'react';
import AddInvoice from '../AddInvoice/AddInvoice';
import { useNavigate, useParams } from 'react-router-dom';
import {
  onGetClientList,
  onGetInvoiceDetail,
  onGetInvoiceList,
  onGetInvoiceSettings,
  onUpdateInvoice,
} from '../../../toolkit/actions';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import AppLoader from '@crema/components/AppLoader';
import { InvoiceSettingType, InvoiceType } from '@crema/types/models/invoice';

const EditInvoicePage = () => {
  const { id } = useParams();
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
  const selectedInvoice = useAppSelector(
    ({ invoiceApp }) => invoiceApp.selectedInvoice,
  );
  const loading = useAppSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(onGetInvoiceList({ folder: undefined, page: 0 }));
    dispatch(onGetClientList());
    dispatch(onGetInvoiceSettings());
    if (id) onGetInvoiceDetail(Number(id));
  }, [dispatch, id]);

  const onSave = (invoice: InvoiceType) => {
    dispatch(onUpdateInvoice(invoice));

    navigate('/invoice/home');
  };

  return loading ? (
    <AppLoader />
  ) : clientsList && invoiceList?.length ? (
    <AddInvoice
      selectedInv={selectedInvoice as InvoiceType}
      clientsList={clientsList}
      totalCount={invoiceList?.length || 0}
      invoiceSettings={invoiceSettings as InvoiceSettingType}
      onSave={onSave}
    />
  ) : null;
};

export default EditInvoicePage;
