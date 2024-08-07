import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  onUpdateMailReadStatus,
  onUpdateMailStarredStatus,
} from '../../../../../toolkit/actions';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@crema/components/AppTooltip';
import { useAppDispatch, useAppSelector } from '../../../../../toolkit/hooks';

type Props = {
  checkedMails: number[];
  setCheckedMails: (data: number[]) => void;
  path: string[];
};

const MoreOptions = (props: Props) => {
  const { checkedMails, setCheckedMails, path } = props;

  let unReadOption;
  let readOption;
  let starredOption;
  let unStarredOption;

  const dispatch = useAppDispatch();

  const mailList = useAppSelector(({ mailApp }) => mailApp.mailList);

  const [isMoreIcon, onOpenMoreIcon] = useState(null);

  mailList?.map((mail) => {
    if (checkedMails.includes(mail.id) && mail.isRead) {
      unReadOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isRead) {
      readOption = true;
    }
    if (checkedMails.includes(mail.id) && mail.isStarred) {
      unStarredOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isStarred) {
      starredOption = true;
    }
    return null;
  });

  const onViewMoreOpen = (event: any) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onChangeReadStatus = (statusValue: number) => {
    const status = !!statusValue;
    dispatch(onUpdateMailReadStatus(checkedMails, status));
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeAllReadStatus = (statusValue: number) => {
    const status = !!statusValue;
    const checkedMails = mailList?.map((mail) => mail.id);
    dispatch(onUpdateMailReadStatus(checkedMails, status));
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeAllStarred = (status: number) => {
    const checkedMails = mailList?.map((mail) => mail.id);
    dispatch(
      onUpdateMailStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  const onChangeStarredStatus = (status: number) => {
    dispatch(
      onUpdateMailStarredStatus(checkedMails, status, path[path.length - 1]),
    );
    setCheckedMails([]);
    onOpenMoreIcon(null);
  };

  return checkedMails.length > 0 ? (
    <Box component='span' sx={{ ml: { xs: 'auto', sm: 0 } }}>
      <AppTooltip title={<IntlMessages id='common.more' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onViewMoreOpen}
          size='large'
        >
          <MoreVertIcon />
        </IconButton>
      </AppTooltip>

      <Menu
        anchorEl={isMoreIcon}
        open={Boolean(isMoreIcon)}
        onClose={onViewMoreClose}
      >
        {readOption ? (
          <MenuItem onClick={() => onChangeReadStatus(1)}>
            <IntlMessages id='mailApp.markAsRead' />
          </MenuItem>
        ) : null}
        {unReadOption ? (
          <MenuItem onClick={() => onChangeReadStatus(0)}>
            <IntlMessages id='mailApp.markAsUnread' />
          </MenuItem>
        ) : null}
        {starredOption ? (
          <MenuItem onClick={() => onChangeStarredStatus(1)}>
            <IntlMessages id='mailApp.markAsImportant' />
          </MenuItem>
        ) : null}
        {unStarredOption ? (
          <MenuItem onClick={() => onChangeStarredStatus(0)}>
            <IntlMessages id='mailApp.markAsNotImportant' />
          </MenuItem>
        ) : null}
      </Menu>
    </Box>
  ) : (
    <Box component='span' sx={{ ml: { xs: 'auto', sm: 0 } }}>
      <AppTooltip title={<IntlMessages id='common.more' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onViewMoreOpen}
          size='large'
        >
          <MoreVertIcon />
        </IconButton>
      </AppTooltip>

      <Menu
        anchorEl={isMoreIcon}
        open={Boolean(isMoreIcon)}
        onClose={onViewMoreClose}
      >
        <MenuItem onClick={() => onChangeAllReadStatus(1)}>
          <IntlMessages id='mailApp.markAllAsRead' />
        </MenuItem>
        <MenuItem onClick={() => onChangeAllReadStatus(0)}>
          <IntlMessages id='mailApp.markAllAsUnread' />
        </MenuItem>
        <MenuItem onClick={() => onChangeAllStarred(1)}>
          <IntlMessages id='mailApp.markAllAsImportant' />
        </MenuItem>
        <MenuItem onClick={() => onChangeAllStarred(0)}>
          <IntlMessages id='mailApp.markAllAsNotImportant' />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MoreOptions;

MoreOptions.defaultProps = {
  checkedMails: [],
};
