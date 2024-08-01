import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddClient from './AddClient';
import { onAddClient } from '../../../toolkit/actions';
import { useAppDispatch } from '../../../toolkit/hooks';
import { ClientType } from '@crema/types/models/invoice';

const AddClients = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSave = (client: ClientType) => {
    dispatch(onAddClient(client));
    navigate('/invoice/clients');
  };

  return <AddClient onSave={onSave} />;
};

export default AddClients;
