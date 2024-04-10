import { jsonPlaceholderRequest } from '../../utils/api';
import { ENDPOINTS } from '../../utils/endpoints';
import { HTTP_METHOD } from '../../utils/constants';
import { Dispatch, SetStateAction } from 'react';
import { Todo } from './index';

export const getTodoList = async (
  setTodos: Dispatch<SetStateAction<readonly Todo[]>>
) => {
  try {
    const response = await jsonPlaceholderRequest({
      url: ENDPOINTS.GET_TODO_LIST,
      method: HTTP_METHOD.GET,
    });

    setTodos(response.data);
  } catch (error) {
    console.error(error);
  }
};
