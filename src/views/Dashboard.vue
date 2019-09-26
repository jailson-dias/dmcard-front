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

export default {
  components: {
    Menu,
    CreditRequests
  }
};
</script>

<style scoped>
</style>