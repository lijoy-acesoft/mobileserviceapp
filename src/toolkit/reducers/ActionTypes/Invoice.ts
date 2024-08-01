import {
  ADD_NEW_CLIENTS,
  ADD_NEW_INVOICE,
  GET_CLIENT_DETAIL,
  GET_CLIENT_LIST,
  GET_INVOICE_DETAIL,
  GET_INVOICE_FOLDER_LIST,
  GET_INVOICE_LIST,
  GET_INVOICE_SETTINGS,
  UPDATE_CLIENTS,
  UPDATE_INVOICE,
  UPDATE_INVOICE_SETTINGS,
} from '@crema/types/actions/Invoice.action';
import { createAction } from '@reduxjs/toolkit';

import {
  ClientType,
  InvFolderType,
  InvoiceSettingType,
  InvoiceType,
} from '@crema/types/models/invoice';

export const GetInvoiceListAction =
  createAction<InvoiceType[]>(GET_INVOICE_LIST);

export const InvoiceDetailAction =
  createAction<InvoiceType>(GET_INVOICE_DETAIL);

export const InvoiceFolderAction = createAction<InvFolderType[]>(
  GET_INVOICE_FOLDER_LIST,
);

export const GetInvoiceSettingsAction =
  createAction<InvoiceSettingType>(GET_INVOICE_SETTINGS);

export const GetClientAction = createAction<ClientType[]>(GET_CLIENT_LIST);

export const AddClientAction = createAction<ClientType[]>(ADD_NEW_CLIENTS);

export const UpdateClientAction = createAction<ClientType[]>(UPDATE_CLIENTS);

export const AddInvoiceAction = createAction<InvoiceType>(ADD_NEW_INVOICE);

export const UpdateInvoiceAction = createAction<InvoiceType[]>(UPDATE_INVOICE);

export const UpdateInvoiceSettingsAction = createAction<InvoiceType[]>(
  UPDATE_INVOICE_SETTINGS,
);
export const GetClientDetailAction =
  createAction<ClientType>(GET_CLIENT_DETAIL);