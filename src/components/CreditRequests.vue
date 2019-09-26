<template>
  <v-content>
    <div class="d-flex flex-column align-center">
      <h2 class="display-1 mt-9 mb-6">Todas as solicitações</h2>
      <v-list>
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
        <RequestInfoCard />
      </v-list>
    </div>
  </v-content>
</template>

<script>
import RequestInfoCard from "./RequestInfoCard";
export default {
  components: {
    RequestInfoCard
  }
};
</script>

<style>
</style>