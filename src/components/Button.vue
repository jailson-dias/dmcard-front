<template>
  <div class="d-flex justify-center mt-2 mb-5">
    <v-btn color="#023d86" large :disabled="disabled">
      <p class="button-text">{{text}}</p>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    disabled: Boolean
  }
};
</script>

<style>
.v-btn {
  border-radius: 8px !important;
}

.button-text {
  text-transform: none;
  font-weight: bold;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0 !important;
  font-size: 18px;
}
</style>