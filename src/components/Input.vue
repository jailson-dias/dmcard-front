<template>
  <v-text-field
    v-model="test"
    :label="label"
    outlined
    flat
    single-line
    :height="25"
    :autofocus="autofocus"
    color="#222222"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    autofocus: Boolean,
    label: String
  },
  data() {
    return {
      text: ""
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