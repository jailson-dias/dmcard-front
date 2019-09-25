<template>
  <div id="request-card-form">
    <div class="d-flex flex-column">
      <h2
        class="d-flex text-center display-1 font-weight-bold"
        :style="{fontSize: titleSize + 'px'}"
      >{{title}}</h2>
      <p class="text-justify" :style="{fontSize: subtitleSize + 'px'}">{{subtitle}}</p>
      <Input v-for="(input, i) in inputs" :label="input.label" :key="'label' + i" />
      <Button :text="button.text" />
    </div>
  </div>
</template>

<script>
import Input from "./Input";
import Button from "./Button";

export default {
  props: {
    title: String,
    subtitle: String,
    titleSize: [String, Number],
    subtitleSize: [String, Number],
    inputs: {
      validator: value => {
        if (Array.isArray(value)) {
          if (!value[0] || !value[0].label) {
            return false;
          }
          return true;
        }
        return false;
      },
      required: true
    },
    button: {
      validator: value => {
        if (value && value.text) {
          return true;
        }
        return false;
      },
      required: true
    }
  },
  data() {
    return {
      windowSize: 100
    };
  },
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

#request-card-form > div > h2 {
  margin-top: 90px;
}

#request-card-form > div > p {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>