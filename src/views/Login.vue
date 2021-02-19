<template>
  <v-app>
    登录页
    <v-btn
      elevation="2"
      @click="plus"
    >去主页
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  methods: {
    plus: function () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
