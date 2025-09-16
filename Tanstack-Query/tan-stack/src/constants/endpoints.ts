export const endpoints = {
  USER: {
    FETCH_CHARACTERS: "/character",
    FETCH_CHARACTER_BY_ID: (id: number) => `/character/${id}`,
  },
};
