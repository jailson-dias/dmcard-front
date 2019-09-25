<template>
  <div id="request-card-form">
    <div class="d-flex flex-column">
      <h2 class="d-flex text-center display-1">Solicite o seu cartão aqui.</h2>
      <p class="text-justify">Para começar precisamos de algumas informações suas.</p>
      <Input label="Nome" />
      <Input label="CPF" />
      <Input label="E-mail" />
      <Input label="Celular" />
      <Button />
    </div>
  </div>
  <!-- <v-container id="input-usage" fluid>
    <v-row>
  <v-col cols="12">-->
  <!-- <v-input :messages="['Messages']" append-icon="close" prepend-icon="phone">Default Slot</v-input> -->
  <!-- </v-col>
    </v-row>
  </v-container>-->
  <!-- <Input label="Alguma Coisa" />
    <Input label="outra Coisa" />
  <Button />-->
</template>

<script>
import Input from "./Input";
import Button from "./Button";

export default {
  components: {
    Input,
    Button
  }
};
</script>

<style>
#request-card-form {
  padding-left: 60px !important;
  padding-right: 60px !important;
}

#request-card-form h2 {
  margin-top: 50px;
}

#request-card-form p {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>