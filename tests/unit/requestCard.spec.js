import { shallowMount, createLocalVue } from "@vue/test-utils";
import RequestCard from "@/views/RequestCard.vue";
import Carousel from "@/components/Carousel.vue";
import FormRequestCard from "@/components/FormRequestCard.vue";
import Router from "vue-router";

const localVue = createLocalVue();
localVue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(RequestCard, { localVue });

    return {
      wrapper,
      Carousel: () => wrapper.find(Carousel),
      FormRequestCard: () => wrapper.find(FormRequestCard)
    };
  };

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("A página tem o carousel e o form para preencher os dados", () => {
    const { Carousel, FormRequestCard } = build();

    expect(Carousel().exists()).toBe(true);
    expect(FormRequestCard().exists()).toBe(true);
  });
});
