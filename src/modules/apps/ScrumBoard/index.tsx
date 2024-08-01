import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../toolkit/hooks';
import { onGetMemberList, onGetScrumLabelList } from '../../../toolkit/actions';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import { useParams } from 'react-router-dom';

const ScrumBoard = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(onGetScrumLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetMemberList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (params.id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <>{onGetMainComponent()}</>;
};

export default ScrumBoard;
