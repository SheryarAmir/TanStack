export const endpoints = {
  TODO: {
    POST_TODO: "/todo/addtodo",
    FETCH_ALL_TODOS: "/todo/todos",
    FETCH_TODO_BY_ID: (id: string) => `todo/${id}`,
    DELETE_TODO: (id: string) => `/todo/delete/${id}`,
    COMPLETE_TODO: (id: string) => `/todo/complete/${id}`,
  },
};
