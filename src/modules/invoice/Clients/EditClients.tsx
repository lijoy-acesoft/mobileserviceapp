import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddClient from './AddClient';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import { onGetClientDetail, onUpdateClient } from '../../../toolkit/actions';
import { ClientType } from '@crema/types/models/invoice';
import AppLoader from '@crema/components/AppLoader';

const EditClients = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(({ common }) => common);
  const selectedClient = useAppSelector(
    ({ invoiceApp }) => invoiceApp.selectedClient,
  );

  useEffect(() => {
    if (id) dispatch(onGetClientDetail(id));
  }, [dispatch, id]);

  const onSave = (client: ClientType) => {
    dispatch(onUpdateClient(client));
    navigate('/invoice/clients');
  };
  return loading ? (
    <AppLoader />
  ) : !isEmptyObject(selectedClient as ClientType) ? (
    <AddClient selectedClient={selectedClient as ClientType} onSave={onSave} />
  ) : null;
};

export default EditClients;
