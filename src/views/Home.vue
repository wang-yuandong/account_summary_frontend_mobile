<template>
  <v-main>
    <NavBar/>
    <CardList/>
  </v-main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars
import CardList from '@/components/CardList.vue'
// @ is an alias to /src
import NavBar from "@/components/NavBar";

export default {
  name: 'Home',
  components: {
    CardList,
    NavBar
  }
}
</script>
