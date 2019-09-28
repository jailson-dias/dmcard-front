<template>
  <v-text-field
    v-model="text"
    :label="label"
    v-mask="mask ? [true, mask] : [false, money]"
    outlined
    :height="25"
    :autofocus="autofocus"
    :rules="rules"
    color="#222222"
    :prefix="prefix"
    :type="type"
    @input="(event) => this.$emit('input', event)"
  ></v-text-field>
</template>

<script>
import { mask } from "vue-the-mask";
import { VMoney } from "v-money";
export default {
  directives: {
    mask: function(el, binding) {
      // Utilizado para poder escolher estre a máscara de tamanho pré definido ou de dinheiro
      const [type, maskValue] = binding.value;
      binding.value = maskValue;

      if (type && maskValue) {
        return mask(el, binding);
      } else if (!type && maskValue) {
        return VMoney(el, binding);
      }
    }
  },
  props: {
    autofocus: Boolean,
    label: String,
    rules: Array,
    mask: String,
    money: Object,
    prefix: String,
    defaultValue: String,
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      text: this.defaultValue || ""
    };
  }
};
</script>

<style>
input {
  margin-top: 0 !important;
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 40px !important;
}
.v-input__control {
  height: 55px !important;
}

.v-text-field--outlined .v-label {
  top: 12px !important;
}

.v-input__slot {
  border-radius: 8px !important;
}
</style>