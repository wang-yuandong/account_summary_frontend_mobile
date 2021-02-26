<template>
  <v-app>
    <NavBar/>
    <v-main>
      <CardList/>
    </v-main>
  </v-app>
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
