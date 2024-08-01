import {
  ADD_NEW_BLOG,
  EDIT_BLOG,
  GET_BLOGS_DETAIL,
  GET_BLOGS_LIST,
} from '@crema/types/actions/Blogs.action';
import { Dispatch } from 'redux';
import { AppActions } from '@crema/types/actions';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { appIntl } from '@crema/helpers/Common';
import jwtAxios from '@crema/services/auth/jwt-auth';
import { BlogContentType } from '@crema/types/models/extrapages/Blog';

export const getBlogList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/pages/blogs')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BLOGS_LIST, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch(() => {
        dispatch(fetchError(String(messages['message.somethingWentWrong'])));
      });
  };
};
export const getBlogDetail = (id: string) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/pages/blogs/detail', {
        params: {
          id,
        },
      })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BLOGS_DETAIL, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch(() => {
        dispatch(fetchError(String(messages['message.somethingWentWrong'])));
      });
  };
};

export const onAddBlog = (blog: BlogContentType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    jwtAxios
      .post('/pages/blogs', { blog })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: ADD_NEW_BLOG,
            payload: data.data,
          });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch(() => {
        dispatch(fetchError(String(messages['message.somethingWentWrong'])));
      });
  };
};

export const onEditBlog = (blog: BlogContentType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    jwtAxios
      .put('/pages/blogs', { blog })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: EDIT_BLOG,
            payload: data.data,
          });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch(() => {
        dispatch(fetchError(String(messages['message.somethingWentWrong'])));
      });
  };
};
