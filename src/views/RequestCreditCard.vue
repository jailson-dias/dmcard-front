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
      :title="modal.title"
      :text="modal.text"
      :dialog="modal.show"
      :requestCreditCard="requestCreditCardData"
      @set="hideModal"
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
      },
      income: value => value.length > 4 || ""
    };
    return {
      valid: false,
      modal: {
        show: false
      },
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
          rules: [rules.required, rules.income]
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
    submit(valid) {
      if (!valid) {
        this.showNotFilled();
        return;
      }
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
            this.showAccepted();
          } else {
            this.showRefused();
          }
        })
        .catch(err => {
          this.showError(err.message);
        });
    },
    hideModal() {
      this.modal = {
        show: false
      };
    },
    showAccepted() {
      this.modal = {
        show: true,
        title: "Resultado da análise de crédito"
      };
    },
    showRefused() {
      this.requestCreditCardData = undefined;
      this.modal = {
        show: true,
        title: "Crédito recusado",
        text: "No momento não conseguimos conceder crédito para você"
      };
    },
    showError(message) {
      this.requestCreditCardData = undefined;
      this.modal = {
        show: true,
        title: "CPF já utilizado",
        text:
          "Já foi solicitado uma análise de créito para este CPF, consulte a área administrativa para mais detalhes sobre o status da análise de crédito para este CPF"
      };
    },
    showNotFilled() {
      this.requestCreditCardData = undefined;
      this.modal = {
        show: true,
        title: "Dados incorretos",
        text: "Preencha todos os dados corretamente"
      };
    }
  }
};
</script>

<style scoped>
</style>