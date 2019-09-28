export const create = (instance, { name, email, cpf, phone, income }) => {
  return instance
    .post(`/credit/request`, { name, email, cpf, phone, income })
    .then(result => result.data);
};

export const listAll = instance => {
  return instance.get(`/credit/request`).then(result => result.data);
};

export const listAccepted = instance => {
  return instance.get(`/credit/request/accepted`).then(result => result.data);
};

export const listRefused = instance => {
  return instance.get(`/credit/request/refused`).then(result => result.data);
};

export const deleteRequests = (instance, { id }) => {
  return instance.delete(`/credit/request/${id}`).then(result => result.data);
};
