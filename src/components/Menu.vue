<template>
  <v-navigation-drawer app color="#023D86" dark mobile-break-point="900">
    <div class="d-flex justify-center mt-9 mb-4">
      <v-img src="@/assets/nav-dmcard.png" height="80" width="80" contain></v-img>
    </div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">Solicitações</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item-group v-model="item">
        <v-list-item v-for="item in items" :key="item.title" @click.native="item.action">
          <v-list-item-content>
            <v-list-item-title class="ml-7">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click.native="logout({ router: $router })">Sair</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      item: 0,
      items: [
        { title: "Todas", action: this.listAllRequestCreditCard },
        { title: "Aceitas", action: this.listAcceptedRequestCreditCard },
        { title: "Negadas", action: this.listRefusedRequestCreditCard }
      ],
      height: 0
    };
  },
  mounted() {
    this.onResize();
    this.listAllRequestCreditCard();
  },
  computed: {
    ...mapState({
      requestCreditCard: state => state.requestCreditCard
    })
  },
  methods: {
    ...mapActions([
      "logout",
      "listAllRequestCreditCard",
      "listAcceptedRequestCreditCard",
      "listRefusedRequestCreditCard"
    ]),
    onResize() {
      this.height = window.innerHeight;
    }
  }
};
</script>

<style>
</style>