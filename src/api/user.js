export const register = (instance, { username, name, password }) => {
  return instance
    .post(`/users/register`, { username, password, name })
    .then(result => result.data);
};

export const login = (instance, { username, password }) => {
  return instance
    .post(`/users/authenticate`, { username, password })
    .then(result => result.data);
};
