import api from "../api";

export default {
  login({ commit }, { username, password }) {
    return api.user.login({ username, password }).then(user => {
      commit("setUser", user);
      return user;
    });
  },
  createRequestCreditCard({ commit }, { name, cpf, email, phone, income }) {
    return api.requestCreditCard
      .create({ name, cpf, email, phone, income })
      .then(request => {
        commit("setCurrentRequest", request);
        return request;
      });
  }
};
