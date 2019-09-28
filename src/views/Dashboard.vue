<template>
  <v-container class="pa-0 mx-0">
    <div class="d-flex">
      <Menu />
      <CreditRequests />
    </div>
  </v-container>
</template>

<script>
import Menu from "../components/Menu";
import CreditRequests from "../components/CreditRequests";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    Menu,
    CreditRequests
  },
  created() {
    this.reAuthenticateUser({ router: this.$router, isDashboard: true });
  },
  methods: {
    ...mapActions(["reAuthenticateUser"])
  }
};
</script>

<style scoped>
</style>