<template>
  <v-container>
    <v-row no-gutters>
      <v-col :cols="8">
        <Carousel />
      </v-col>
      <v-col :cols="4" class="d-flex flex-column align-center">
        <img src="@/assets/logo.png" alt="logo" class="logo-dmcard" />
        <FormInput
          subtitle="Usuário: admin, senha: admin"
          subtitleSize="15"
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
  components: {
    Carousel,
    FormInput
  },
  data() {
    return {
      inputs: [
        {
          label: "Usuário"
        },
        {
          label: "Senha"
        }
      ],
      button: {
        text: "Entrar"
      }
    };
  }
};
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.logo-dmcard {
  height: 70px;
  width: 70px;
  margin-top: 120px;
  margin-bottom: -80px;
}
</style>