import { shallowMount, createLocalVue } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";
import Menu from "@/components/Menu.vue";
import CreditRequests from "@/components/CreditRequests.vue";
import Router from "vue-router";

const localVue = createLocalVue();
localVue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(Dashboard, { localVue });

    return {
      wrapper,
      Menu: () => wrapper.find(Menu),
      CreditRequests: () => wrapper.find(CreditRequests)
    };
  };

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("A página tem o carousel e o form para preencher os dados", () => {
    const { Menu, CreditRequests } = build();

    expect(Menu().exists()).toBe(true);
    expect(CreditRequests().exists()).toBe(true);
  });
});
