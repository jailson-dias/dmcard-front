import api from "../api";

export default {
  reAuthenticateUser({ commit }, { router, isDashboard, isLogin }) {
    if (localStorage.user) {
      try {
        let user = JSON.parse(localStorage.user);
        commit("setUser", user);
        api.setCredentials(`Bearer ${user.token}`);
        if (!isDashboard) {
          router.push("/dashboard");
        }
      } catch (e) {
        if (!isLogin) {
          router.push("/login");
        }
      }
    } else if (!isLogin) {
      router.push("/login");
    }
  },
  login({ commit }, { router, username, password }) {
    return api.user.login({ username, password }).then(user => {
      commit("setUser", user);
      localStorage.user = JSON.stringify(user);
      api.setCredentials(`Bearer ${user.token}`);
      router.push("/dashboard");
      return user;
    });
  },
  logout({ commit }, { router, isLogin }) {
    api.setCredentials("");
    localStorage.removeItem("user");
    commit("setUser", {});
    if (!isLogin) {
      router.push("/login");
    }
  },
  createRequestCreditCard({ commit }, { name, cpf, email, phone, income }) {
    return api.requestCreditCard
      .create({ name, cpf, email, phone, income })
      .then(request => {
        commit("setCurrentRequest", request);
        return request;
      });
  },
  listAllRequestCreditCard({ commit }) {
    return api.requestCreditCard.listAll().then(requests => {
      commit("setRequestCreditCard", requests);
      commit("setRequestCreditCardScreenTitle", "Todas as solicitações");
    });
  },
  listAcceptedRequestCreditCard({ commit }) {
    return api.requestCreditCard.listAccepted().then(requests => {
      commit("setRequestCreditCard", requests);
      commit("setRequestCreditCardScreenTitle", "Solicitações aceitas");
    });
  },
  listRefusedRequestCreditCard({ commit }) {
    return api.requestCreditCard.listRefused().then(requests => {
      commit("setRequestCreditCard", requests);
      commit("setRequestCreditCardScreenTitle", "Solicitações recusadas");
    });
  },
  removeRequestCreditCard({ commit }, { id }) {
    return api.requestCreditCard.delete({ id }).then(request => {
      commit("removeRequestCreditCard", request);
    });
  }
};
