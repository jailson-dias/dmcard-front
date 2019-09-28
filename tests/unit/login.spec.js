import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import Carousel from "@/components/Carousel.vue";
import FormInput from "@/components/FormInput.vue";
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

describe("Login page", () => {
  let vuetify;
  let state;
  const build = () => {
    const wrapper = shallowMount(Login, {
      localVue,
      vuetify,
      store: new Vuex.Store({
        state,
        actions
      })
    });

    return {
      wrapper,
      Carousel: () => wrapper.find(Carousel),
      FormInput: () => wrapper.find(FormInput)
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    vuetify = new Vuetify();
    state = { ...initialState };
  });

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("A página tem o carousel e o form para preencher os dados", () => {
    const { Carousel, FormInput } = build();

    expect(Carousel().exists()).toBe(true);
    expect(FormInput().exists()).toBe(true);
  });
});
