import axios from "axios";
import { register, login } from "./user";
import {
  create,
  listAll,
  listAccepted,
  listRefused,
  deleteRequests
} from "./requestCreditCard";

const instance = axios.create({
  baseURL: "http://localhost:4000"
});

const setCredentials = token => {
  instance.defaults.headers.common["Authorization"] = token;
};

export default {
  setCredentials,
  user: {
    register: user => register(instance, user),
    login: params => login(instance, params)
  },
  requestCreditCard: {
    create: params => create(instance, params),
    listAll: params => listAll(instance, params),
    listAccepted: params => listAccepted(instance, params),
    listRefused: params => listRefused(instance, params),
    delete: params => deleteRequests(instance, params)
  }
};
