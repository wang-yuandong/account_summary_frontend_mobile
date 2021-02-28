<template>
  <v-snackbar
    transition="scroll-y-transition"
    :color="type"
    :value="visible"
    centered
  >
    {{message}}
  </v-snackbar>
</template>
<script>
export default {
  name: 'MyMessage',
  props:['message','type'],
  data() {
    return {
      visible: true,
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

