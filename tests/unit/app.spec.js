import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Router from "vue-router";

const localVue = createLocalVue();
localVue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(App, { localVue });

    return {
      wrapper,
      NavBar: () => wrapper.find(NavBar),
      Footer: () => wrapper.find(Footer)
    };
  };

  it("É uma instancia do vue", () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("A instacia tem o navbar, o router view e o footer", () => {
    const { NavBar, Footer } = build();

    expect(NavBar().exists()).toBe(true);
    expect(Footer().exists()).toBe(true);
  });
});
