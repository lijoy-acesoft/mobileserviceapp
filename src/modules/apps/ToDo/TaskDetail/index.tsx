import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useAppDispatch, useAppSelector } from '../../../../toolkit/hooks';
import { onGetSelectedTask } from '../../../../toolkit/actions';
import { useParams } from 'react-router-dom';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import { MailDetailSkeleton } from '@crema/components/AppSkeleton/MailDetailSkeleton';

const TaskDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(onGetSelectedTask(Number(id)));
  }, [dispatch, id]);

  const selectedTask = useAppSelector(({ todoApp }) => todoApp.selectedTask);

  if (!selectedTask) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader selectedTask={selectedTask} />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody selectedTask={selectedTask} />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
