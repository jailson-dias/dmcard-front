<template>
  <v-card color="#EDEDED4D" class="rounded-card mx-4 mb-4" width="500">
    <div class="d-flex flex-row align-center">
      <div class="d-flex flex-column align-center justify-center align-self-stretch px-3 score">
        <p class="mb-0 body-2">Score:</p>
        <h1>678</h1>
      </div>
      <div
        class="d-flex flex-column align-left justify-center align-self-stretch mx-3 my-1 user-data"
      >
        <p class="subtitle-1 font-weight-bold mb-0">José da Silva Santos Araújo Neto Primo Filho</p>
        <p class="body-2 mb-0">CPF: 213.123.234-23</p>
        <p class="body-2 mb-0">E-mail: alguma@coisa.com</p>
        <p class="body-2 mb-0">Celular: (00) 23554-3454</p>
      </div>
      <div class="d-flex flex-column align-center justify-center align-self-stretch mr-3">
        <span class="group pa-2">
          <v-icon>delete</v-icon>
        </span>
      </div>
    </div>
    <!--
    <v-card-actions>
      <v-btn text>Listen Now</v-btn>
    </v-card-actions>-->
  </v-card>
</template>

<script>
export default {};
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