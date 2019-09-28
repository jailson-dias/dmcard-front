export const create = (instance, { name, email, cpf, phone, income }) => {
  console.log("resqwer");
  return instance
    .post(`/credit/request`, { name, email, cpf, phone, income })
    .then(result => result.data);
};

export const list = instance => {
  return instance.get(`/credit/request`).then(result => result.data);
};

export const deleteRequests = instance => {
  return instance.delete(`/credit/request`).then(result => result.data);
};
