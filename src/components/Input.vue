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
    @input="(event) => this.$emit('input', event)"
  ></v-text-field>
</template>

<script>
import { mask } from "vue-the-mask";
import { VMoney } from "v-money";
export default {
  directives: {
    mask: function(el, binding) {
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
    prefix: String
  },
  data() {
    return {
      text: "",
      teste: {
        F: {
          pattern: /[a-fA-F]/,
          transform: v => v.toLocaleUpperCase()
        }
      },
      directive: "v-mask",
      value: "####"
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