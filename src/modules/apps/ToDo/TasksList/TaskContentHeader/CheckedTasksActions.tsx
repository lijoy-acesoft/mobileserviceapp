import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import {
  onDeleteSelectedTasks,
  onUpdateTaskLabels,
} from '../../../../../toolkit/actions';
import { useAppDispatch, useAppSelector } from '../../../../../toolkit/hooks';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@crema/components/AppTooltip';
import { StyledBox } from './index.style';

type Props = {
  checkedTasks: number[];
  setCheckedTasks: (data: number[]) => void;
  page: number;
};

const CheckedTasksActions = ({
  checkedTasks,
  setCheckedTasks,
  page,
}: Props) => {
  const { folder, label } = useParams();
  const dispatch = useAppDispatch();
  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const labelList = useAppSelector(({ todoApp }) => todoApp.labelList);

  const onLabelOpen = (event: any) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onDeleteTasks = () => {
    if (folder)
      dispatch(onDeleteSelectedTasks(checkedTasks, 'folder', folder, page));
    if (label)
      dispatch(onDeleteSelectedTasks(checkedTasks, 'label', label, page));

    setCheckedTasks([]);
  };

  const onSelectLabel = (event: any) => {
    const labelType = event.target.value;
    dispatch(onUpdateTaskLabels(checkedTasks, labelType));
    setCheckedTasks([]);
    onLabelClose();
  };

  return (
    <>
      <StyledBox component='span'>
        <Box component='span'>
          <AppsDeleteIcon
            deleteAction={onDeleteTasks}
            deleteTitle={<IntlMessages id='todo.deleteMessage' />}
            sx={{
              cursor: 'pointer',
              color: 'text.disabled',
            }}
          />
        </Box>

        <Box component='span'>
          <AppTooltip title={<IntlMessages id='common.label' />}>
            <IconButton
              sx={{
                color: 'text.disabled',
              }}
              size='large'
              onClick={onLabelOpen}
            >
              <LabelOutlinedIcon
                sx={{
                  cursor: 'pointer',
                  color: 'text.disabled',
                  display: 'block',
                }}
              />
            </IconButton>
          </AppTooltip>
        </Box>
      </StyledBox>
      <Menu
        anchorEl={isLabelOpen}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        {labelList.map((label) => {
          return (
            <MenuItem
              key={label.id}
              sx={{ p: '8px !important' }}
              value={label.id}
              onClick={onSelectLabel}
            >
              {label.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CheckedTasksActions;
