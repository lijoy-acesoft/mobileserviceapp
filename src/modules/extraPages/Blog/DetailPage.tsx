import React, { useEffect } from 'react';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import BlogDetail from './BlogDetail';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import { getBlogDetail } from '../../../toolkit/actions';
import { isEmptyObject } from '@crema/helpers/ApiHelper';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const selectedBlog = useAppSelector(({ blogs }) => blogs.selectedBlog);
  const { loading } = useAppSelector(({ common }) => common);

  useEffect(() => {
    if (id) dispatch(getBlogDetail(id));
  }, [dispatch, id]);

  return loading ? (
    <AppLoader />
  ) : !isEmptyObject(selectedBlog?.blogDetail) ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <BlogDetail
        blogSidebar={selectedBlog?.blogSidebar}
        blogDetail={selectedBlog?.blogDetail}
      />
    </AppAnimate>
  ) : null;
};
export default DetailPage;
