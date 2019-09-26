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
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import FormInput from "../components/FormInput";
export default {
  name: "RequestCreditCard",
  components: {
    Carousel,
    FormInput
  },
  data() {
    return {
      inputs: [
        {
          label: "Nome"
        },
        {
          label: "CPF"
        },
        {
          label: "E-mail"
        },
        {
          label: "Celular"
        }
      ],
      button: {
        text: "Solicitar Cartão"
      }
    };
  }
};
</script>

<style scoped>
</style>