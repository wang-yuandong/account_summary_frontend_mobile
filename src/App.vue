<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
      <Alerts/>
    </v-app>
  </div>
</template>

<script>
  import Alerts from "@/components/common/Alerts.vue";

  export default {
    name: 'App',
    components: {Alerts},
    data: () => ({
      //
    }),
  };
</script>
