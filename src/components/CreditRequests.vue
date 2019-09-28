<template>
  <v-content>
    <div class="d-flex flex-column align-center">
      <h2 class="display-1 mt-9 mb-6">{{requestCreditCardScreenTitle}}</h2>
      <v-list color="transparent">
        <RequestInfoCard
          v-for="(credit, i) in requestCreditCard"
          :key="i + 'request'"
          :score="credit.score"
          :name="credit.name"
          :cpf="credit.cpf"
          :email="credit.email"
          :phone="credit.phone"
          :income="credit.income"
          :credit="credit.credit"
          :id="credit.id"
        />
      </v-list>
    </div>
  </v-content>
</template>

<script>
import RequestInfoCard from "./RequestInfoCard";

import { mapState } from "vuex";

export default {
  components: {
    RequestInfoCard
  },
  computed: {
    ...mapState({
      requestCreditCard: state => state.requestCreditCard,
      requestCreditCardScreenTitle: state => state.requestCreditCardScreenTitle
    })
  }
};
</script>

<style>
</style>