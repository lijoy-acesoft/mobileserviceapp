import {
  ADD_NEW_BLOG,
  EDIT_BLOG,
  GET_BLOGS_DETAIL,
  GET_BLOGS_LIST,
} from '@crema/types/actions/Blogs.action';
import { createAction } from '@reduxjs/toolkit';
import {
  BlogContentType,
  BlogSidebarType,
  BlogType,
} from '@crema/types/models/extrapages/Blog';

export const BlogListAction = createAction<BlogType>(GET_BLOGS_LIST);

export const BlogDetailAction = createAction<{
  blogDetail: BlogContentType;
  blogSidebar: BlogSidebarType;
}>(GET_BLOGS_DETAIL);

export const AddBlogAction = createAction<BlogType>(ADD_NEW_BLOG);

export const EditBlogAction = createAction<BlogType>(EDIT_BLOG);
