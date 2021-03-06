<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center"></div>

    <v-spacer></v-spacer>

    <span class="mr-2">用户名</span>
    <v-icon>{{name}}</v-icon>
  </v-app-bar>
</template>

<script>

  export default {
    name: 'NavBar',
    components: {},
    data() {
      return {
        name: ''
      }
    },
    mounted() {
      this.name = localStorage.getItem('name')
    }
  }
</script>
