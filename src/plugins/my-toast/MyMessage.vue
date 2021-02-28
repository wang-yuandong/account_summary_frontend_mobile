<template>
  <v-alert
    transition="scroll-y-transition"
    dense
    type="success"
  >Im an Alert Usage Example
  </v-alert>
</template>
<script>
export default {
  name: 'MyMessage',
  data() {
    return {
      visible: false,
      message: "",
    };
  },
  watch: {
    visible: function (val, oldVal) {
      console.log(val, oldVal)
    },
  }
};
</script>
<style scoped>

</style>

