import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/helpers/IntlMessages';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { onUpdateSelectedTask } from '../../../../../toolkit/actions';
import { MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../toolkit/hooks';
import { TodoType } from '@crema/types/models/apps/Todo';

type Props = {
  selectedTask: TodoType;
};

const TaskStatus = ({ selectedTask }: Props) => {
  const statusList = useAppSelector(({ todoApp }) => todoApp.statusList);

  const dispatch = useAppDispatch();

  const onChangeStatus = (event: SelectChangeEvent<number>) => {
    dispatch(
      onUpdateSelectedTask({
        ...selectedTask,
        status: event.target.value as number,
      }),
    );
  };

  return (
    <FormControl fullWidth variant='outlined' sx={{ minWidth: 125 }}>
      <InputLabel id='status-select-outlined-label'>
        <IntlMessages id='common.status' />
      </InputLabel>
      <Select
        labelId='status-select-outlined-label'
        label={<IntlMessages id='common.status' />}
        value={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
              value={status.type}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;
