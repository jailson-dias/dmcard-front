<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col :md="12">
                <p class="body-1" v-if="text">{{text}}</p>
                <p v-else class="body-1" v-for="(field, i) in requestCreditCard" :key="i+'field'">
                  <strong>{{field.field}}:</strong>
                  {{' '}}{{field.value}}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="$emit('set', false)">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    requestCreditCard: Array,
    title: String,
    text: String
  }
};
</script>