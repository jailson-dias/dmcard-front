export default {
  setUser(state, user) {
    state.user = user;
  },
  setCurrentRequest(state, currentRequest) {
    state.currentRequest = currentRequest;
  },
  setCurrentRequestField(state, { field, value }) {
    state.currentRequest[field] = value;
  }
};
