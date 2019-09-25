import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import Carousel from "@/components/Carousel.vue";
import FormLogin from "@/components/FormLogin.vue";
import Router from "vue-router";

const localVue = createLocalVue();
localVue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(Login, { localVue });

    return {
      wrapper,
      Carousel: () => wrapper.find(Carousel),
      FormLogin: () => wrapper.find(FormLogin)
    };
  };

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("A página tem o carousel e o form para preencher os dados", () => {
    const { Carousel, FormLogin } = build();

    expect(Carousel().exists()).toBe(true);
    expect(FormLogin().exists()).toBe(true);
  });
});
