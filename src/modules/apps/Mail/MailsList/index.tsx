import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MailContentHeader from './MailContentHeader';
import {
  onGetMailList,
  onUpdateMailStarredStatus,
} from '../../../../toolkit/actions';
import { Hidden } from '@mui/material';
import AppsPagination from '@crema/components/AppsPagination';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsFooter from '@crema/components/AppsContainer/AppsFooter';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import EmailListSkeleton from '@crema/components/AppSkeleton/EmailListSkeleton';
import MailListItem from './MailListItem';
import MailListItemMobile from './MailListItemMobile';
import { useAppDispatch, useAppSelector } from '../../../../toolkit/hooks';
import { MailType } from '@crema/types/models/apps/Mail';

const MailsList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { folder, label } = useParams();

  const [filterText, onSetFilterText] = useState('');

  const mailList = useAppSelector(({ mailApp }) => mailApp.mailList);

  const labelList = useAppSelector(({ mailApp }) => mailApp.labelList);

  const [page, setPage] = useState(0);

  const { pathname } = useLocation();

  const path = pathname.split('/');

  const loading = useAppSelector(({ common }) => common.loading);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    setPage(0);
    if (folder) {
      dispatch(onGetMailList('folder', folder, page));
    }
    if (label) {
      dispatch(onGetMailList('label', label, page));
    }
  }, [dispatch, folder, label, page]);

  const [checkedMails, setCheckedMails] = useState<number[]>([]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    value: number,
  ) => {
    setPage(value);
  };

  const onChangeCheckedMails = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onViewMailDetail = (mail: MailType) => {
    if (label) navigate(`/apps/mail/label/${label}/${mail.id}`);
    if (folder) navigate(`/apps/mail/${folder}/${mail.id}`);
  };

  const onChangeStarred = (checked: boolean, mail: MailType) => {
    dispatch(
      onUpdateMailStarredStatus([mail.id], checked, path[path.length - 1]),
    );
  };
  const onGetFilteredMails = () => {
    if (filterText === '') {
      return mailList;
    } else {
      return mailList.filter(
        (mail) =>
          mail?.subject?.toLowerCase().includes(filterText.toLowerCase()) ||
          mail?.detail?.toLowerCase().includes(filterText.toLowerCase()),
      );
    }
  };

  const totalMails = useAppSelector(({ mailApp }) => mailApp.totalMails);

  const list = onGetFilteredMails();
  console.log('list', list, mailList, labelList);
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onPageChange={onPageChange}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          page={page}
          path={path}
        />
      </AppsHeader>
      <AppsContent>
        <Hidden smDown>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItem
                key={mail.id}
                mail={mail}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
              />
            )}
          />
        </Hidden>
        <Hidden smUp>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItemMobile
                key={mail.id}
                mail={mail}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
              />
            )}
          />
        </Hidden>
      </AppsContent>
      <Hidden smUp>
        {list?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailsList;
