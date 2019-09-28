<template>
  <v-card color="#EDEDED4D" class="rounded-card mx-4 mb-4" width="500">
    <div class="d-flex flex-row align-center">
      <div class="d-flex flex-column align-center justify-center align-self-stretch px-3 score">
        <p class="mb-0 body-2">Score:</p>
        <h1>{{score}}</h1>
      </div>
      <div
        class="d-flex flex-column align-left justify-center align-self-stretch mx-3 my-2 user-data"
      >
        <p class="subtitle-1 font-weight-bold mb-0">{{name}}</p>
        <p class="body-2 mb-0">CPF: {{fomartedCPF}}</p>
        <p class="body-2 mb-0">E-mail: {{email}}</p>
        <p class="body-2 mb-0">Celular: {{formatedPhone}}</p>
        <p class="body-2 mb-0">Renda: {{formatedIncome}}</p>
        <p class="body-2 mb-0">Limite do cartão: {{formatedCredit}}</p>
      </div>
      <div class="d-flex flex-column align-center justify-center align-self-stretch mr-3">
        <v-btn elevation="0" icon @click.native="removeRequestCreditCard({id})">
          <v-icon>delete</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import mask from "vue-the-mask/src/maskit";
import { tokens } from "vue-the-mask";
import { format as formatMoney } from "v-money/src/utils";

import { mapActions } from "vuex";

let money = {
  prefix: "R$ ",
  suffix: "",
  decimal: ",",
  thousands: ".",
  precision: 2
};

export default {
  props: {
    score: [String, Number],
    name: String,
    cpf: String,
    email: String,
    phone: String,
    income: [String, Number],
    credit: [String, Number],
    id: String
  },
  computed: {
    fomartedCPF() {
      return mask(this.cpf, "###.###.###-##", true, tokens);
    },
    formatedPhone() {
      return mask(this.phone, "(##) #####-####", true, tokens);
    },
    formatedIncome() {
      return formatMoney(parseFloat(this.income), money);
    },
    formatedCredit() {
      return formatMoney(parseFloat(this.credit), money);
    }
  },
  methods: {
    ...mapActions(["removeRequestCreditCard"])
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 8px;
}

.score {
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}
.user-data {
  flex: 1;
}
</style>