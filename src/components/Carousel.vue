<template>
  <v-carousel
    :show-arrows="false"
    :height="height"
    cycle
    hide-delimiter-background
    :interval="3000"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <v-img :src="item.src" aspect-ratio="1.7" :contain="item.contain" height="100%" width="100%"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/app-mockup.png"),
          contain: true
        },
        {
          src: require("@/assets/atuamos.jpg")
        },
        {
          src: require("@/assets/perguntas.jpg")
        }
      ],
      height: 0
    };
  },
  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.height = window.innerHeight;
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

.v-icon {
  color: #00000055 !important;
}
</style>