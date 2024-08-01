import React, { useEffect } from 'react';
import AppLoader from '@crema/components/AppLoader';
import AppAnimate from '@crema/components/AppAnimate';
import BlogContent from './BlogContent';
import { useAppDispatch, useAppSelector } from '../../../toolkit/hooks';
import { getBlogList } from '../../../toolkit/actions';
import { isEmptyObject } from '@crema/helpers/ApiHelper';

const Blogs = () => {
  const blogLists = useAppSelector(({ blogs }) => blogs.blogLists);
  const { loading } = useAppSelector(({ common }) => common);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);

  return loading ? (
    <AppLoader />
  ) : !isEmptyObject(blogLists.blogSidebar) ? (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <BlogContent
        blogSidebar={blogLists.blogSidebar}
        blogContent={blogLists.blogContent}
      />
    </AppAnimate>
  ) : null;
};
export default Blogs;
