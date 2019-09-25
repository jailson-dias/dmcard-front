<template>
  <v-carousel
    :show-arrows="false"
    :height="windowSize"
    cycle
    hide-delimiter-background
    :interval="3000"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.windowSize = window.innerHeight;
    }
  }
};
</script>

<style>
.v-carousel__controls {
  justify-content: flex-start !important;
}

.v-carousel__controls__item {
  height: 15px !important;
  width: 15px !important;
  margin-left: 1px !important;
  margin-right: 1px !important;
}

.v-carousel__controls__item .v-btn__content .v-icon {
  font-size: 10px !important;
  height: 15px !important;
  width: 15px !important;
}
</style>