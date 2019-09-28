<template>
  <v-container class="pa-0 mx-0">
    <v-row no-gutters>
      <v-col :cols="8">
        <Carousel />
      </v-col>
      <v-col :cols="4">
        <FormInput
          title="Solicite o seu cartão aqui."
          subtitle="Para começar precisamos de algumas informações suas."
          :inputs="inputs"
          :button="button"
        />
      </v-col>
    </v-row>

    <RequestCreditCardDialog
      title="Resultado da análise de crédito"
      :dialog="accepted"
      :requestCreditCard="requestCreditCardData"
      @set="setAccepted"
    />
    <RequestCreditCardDialog
      title="Crédito recusado"
      text="No momento não conseguimos conceder crédito para você"
      :dialog="refused"
      @set="setRefused"
    />
    <RequestCreditCardDialog
      title="CPF já utilizado"
      text="Já foi solicitado uma análise de créito para este CPF, consulte a área administrativa para mais detalhes sobre o status da análise de crédito para este CPF"
      :dialog="error"
      @set="setError"
    />
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import FormInput from "../components/FormInput";
import RequestCreditCardDialog from "../components/RequestCreditCardDialog";

import mask from "vue-the-mask/src/maskit";
import { tokens } from "vue-the-mask";
import { format as formatMoney } from "v-money/src/utils";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "RequestCreditCard",
  components: {
    Carousel,
    FormInput,
    RequestCreditCardDialog
  },
  data() {
    const rules = {
      required: value => !!value || "",
      cpf: value => value.length == 14 || "",
      phone: value => value.length == 15 || "",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "";
      }
    };
    return {
      accepted: false,
      refused: false,
      error: false,
      requestCreditCardData: [],
      creditRequest: {
        name: "",
        cpf: "",
        email: "",
        phone: "",
        income: ""
      },
      inputs: [
        {
          label: "Nome",
          set: this.setName,
          rules: [rules.required]
        },
        {
          label: "CPF",
          set: this.setCPF,
          mask: "###.###.###-##",
          rules: [rules.required, rules.cpf]
        },
        {
          label: "E-mail",
          set: this.setEmail,
          rules: [rules.required, rules.email]
        },
        {
          label: "Celular",
          set: this.setPhone,
          mask: "(##) #####-####",
          rules: [rules.required, rules.phone]
        },
        {
          label: "Renda",
          set: this.setIncome,
          prefix: "R$",
          money: {
            decimal: ",",
            thousands: ".",
            precision: 2
          },
          rules: [rules.required]
        }
      ],
      button: {
        text: "Solicitar Cartão",
        submit: this.submit
      }
    };
  },
  methods: {
    ...mapActions(["createRequestCreditCard"]),
    ...mapMutations(["setCurrentRequestField"]),
    setName(value) {
      this.creditRequest.name = value;
    },
    setCPF(value) {
      this.creditRequest.cpf = value;
    },
    setEmail(value) {
      this.creditRequest.email = value;
    },
    setPhone(value) {
      this.creditRequest.phone = value;
    },
    setIncome(value) {
      this.creditRequest.income = value;
    },
    submit() {
      let income = this.creditRequest.income.replace(/[\.]/g, "");
      this.createRequestCreditCard({
        name: this.creditRequest.name,
        cpf: this.creditRequest.cpf.replace(/[\.\-]/g, ""),
        email: this.creditRequest.email,
        phone: this.creditRequest.phone.replace(/[\(\)\.\ \-]/g, ""),
        income: parseFloat(income.replace(",", "."))
      })
        .then(result => {
          if (result.credit > 0) {
            let money = {
              prefix: "R$ ",
              suffix: "",
              decimal: ",",
              thousands: ".",
              precision: 2
            };
            this.requestCreditCardData = [
              {
                field: "name",
                value: result.name
              },
              {
                field: "CPF",
                value: mask(result.cpf, "###.###.###-##", true, tokens)
              },
              {
                field: "E-mail",
                value: result.email
              },
              {
                field: "Celular",
                value: mask(result.phone, "(##) #####-####", true, tokens)
              },
              {
                field: "Renda",
                value: formatMoney(result.income, money)
              },
              {
                field: "Crédito concedido",
                value: formatMoney(result.credit, money)
              }
            ];
            this.setAccepted(true);
          } else {
            this.setRefused(true);
          }
        })
        .catch(err => {
          this.setError(true);
        });
    },
    setAccepted(state) {
      this.accepted = state;
    },
    setRefused(state) {
      this.refused = state;
    },
    setError(state) {
      this.error = state;
    }
  }
};
</script>

<style scoped>
</style>