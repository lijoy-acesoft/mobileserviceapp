import React, { useEffect } from 'react';
import InvoicePdf from './InvoicePdf';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import {
  onGetClientList,
  onGetInvoiceDetail,
  onGetInvoiceSettings,
} from '../../../toolkit/actions';
import { InvoiceSettingType, InvoiceType } from '@crema/types/models/invoice';

const InvoicePdfPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const invoiceSettings = useAppSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );
  const clientsList = useAppSelector(
    ({ invoiceApp }) => invoiceApp.clientsList,
  );
  const selectedInvoice = useAppSelector(
    ({ invoiceApp }) => invoiceApp.selectedInvoice,
  );

  useEffect(() => {
    if (id) {
      dispatch(onGetClientList());
      dispatch(onGetInvoiceSettings());
      dispatch(onGetInvoiceDetail(Number(id)));
    }
  }, [dispatch, id]);

  return clientsList?.length > 0 &&
    !isEmptyObject(invoiceSettings as InvoiceSettingType) &&
    !isEmptyObject(selectedInvoice as InvoiceType) ? (
    <InvoicePdf
      selectedInv={selectedInvoice as InvoiceType}
      clientsList={clientsList}
      invoiceSettings={invoiceSettings as InvoiceSettingType}
    />
  ) : null;
};

export default InvoicePdfPage;
