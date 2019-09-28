export default {
  setUser(state, user) {
    state.user = user;
  },
  setCurrentRequest(state, currentRequest) {
    state.currentRequest = currentRequest;
  },
  setCurrentRequestField(state, { field, value }) {
    state.currentRequest[field] = value;
  },
  setRequestCreditCard(state, requestCreditCard) {
    state.requestCreditCard = requestCreditCard;
  },
  setRequestCreditCardScreenTitle(state, requestCreditCardScreenTitle) {
    state.requestCreditCardScreenTitle = requestCreditCardScreenTitle;
  },
  removeRequestCreditCard(state, request) {
    state.requestCreditCard = state.requestCreditCard.filter(
      r => r.cpf != request.cpf
    );
  }
};
