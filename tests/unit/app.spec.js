import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App";
import Router from "vue-router";
import Vue from "vue";
import Vuex from "vuex";
import actions from "@/store/actions";
import initialState from "@/store/state";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(Vuex);
Vue.use(Vuetify);

describe("App page", () => {
  let vuetify;
  let state;
  const build = () => {
    const wrapper = shallowMount(App, {
      localVue,
      vuetify,
      store: new Vuex.Store({
        state,
        actions
      })
    });

    return {
      wrapper
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    vuetify = new Vuetify();
    state = { ...initialState };
  });

  it("É uma instancia do vue", () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
