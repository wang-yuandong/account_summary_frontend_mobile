<template>
  <v-app>
    <v-alert
      :value="visible"
      :type="type"
    >
      {{msg}}
    </v-alert>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {};
    },
    computed: {
      visible() {
        return this.$store.state.alerts.visible;
      },
      type() {
        return this.$store.state.alerts.type;
      },
      msg() {
        return this.$store.state.alerts.msg;
      },
    },
    methods: {},
  };
</script>
