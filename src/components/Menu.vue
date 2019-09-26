<template>
  <v-navigation-drawer app color="#023D86" dark mobile-break-point="900">
    <div class="d-flex justify-center mt-9 mb-4">
      <v-img src="https://picsum.photos/80/80?random" height="80" width="80" contain></v-img>
    </div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">Solicitações</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content>
          <v-list-item-title class="ml-7">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" }
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
</style>