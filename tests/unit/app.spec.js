import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App";
import Router from "vue-router";

const localVue = createLocalVue();
localVue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(App, { localVue });

    return {
      wrapper
    };
  };

  it("É uma instancia do vue", () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
