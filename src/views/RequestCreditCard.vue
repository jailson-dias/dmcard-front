<template>
  <v-container>
    <v-row no-gutters>
      <v-col :cols="8">
        <Carousel />
      </v-col>
      <v-col :cols="4">
        <FormRequestCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import FormRequestCard from "../components/FormRequestCard";
export default {
  name: "RequestCreditCard",
  components: {
    Carousel,
    FormRequestCard
  }
};
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>