<template>
  <v-container class="pa-0 mx-0">
    <v-row no-gutters>
      <v-col :cols="8">
        <Carousel />
      </v-col>
      <v-col :cols="4" class="d-flex flex-column align-center">
        <img src="@/assets/nav-dmcard.png" alt="logo" class="logo-dmcard" />
        <FormInput
          subtitle="Usuário: admin, senha: admin"
          subtitleSize="15"
          :inputs="inputs"
          :button="button"
        />
      </v-col>
      <RequestCreditCardDialog
        title="Acesso negado"
        text="Usuário e/ou senha incorretos"
        :dialog="modal"
        @set="hideModal"
      />
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import FormInput from "../components/FormInput";
import RequestCreditCardDialog from "../components/RequestCreditCardDialog";

import { mapState, mapActions } from "vuex";

const user = {
  username: "admin",
  password: "admin"
};
export default {
  components: {
    Carousel,
    FormInput,
    RequestCreditCardDialog
  },
  data() {
    return {
      modal: false,
      user,
      inputs: [
        {
          label: "Usuário",
          set: this.setUsername,
          defaultValue: user.username
        },
        {
          label: "Senha",
          type: "password",
          defaultValue: user.password,
          set: this.setPassword
        }
      ],
      button: {
        text: "Entrar",
        submit: this.submit
      }
    };
  },
  computed: {
    ...mapState({
      username: state => state.user.username
    })
  },
  created() {
    this.reAuthenticateUser({ router: this.$router, isLogin: true });
  },
  methods: {
    ...mapActions(["login", "reAuthenticateUser"]),
    setUsername(value) {
      this.user.username = value;
    },
    setPassword(value) {
      this.user.password = value;
    },
    submit() {
      this.login({ router: this.$router, ...this.user }).catch(err => {
        this.modal = true;
      });
    },
    hideModal() {
      this.modal = false;
    }
  }
};
</script>

<style scoped>
.logo-dmcard {
  height: 70px;
  width: 70px;
  margin-top: 120px;
  margin-bottom: -80px;
}
</style>