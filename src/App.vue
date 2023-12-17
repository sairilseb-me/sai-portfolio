

<template>
  <v-app>
    <v-app-bar title="Sai Portfolio" elevation="2">
      <v-spacer></v-spacer>
      <v-btn text @click="routeTo('/')">Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Projects</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>
   <v-main class="mt-3">
    <router-view></router-view>
   </v-main>
  </v-app>

</template>

<script>
import Homepage from './components/views/Homepage.vue'
import {useRouter} from 'vue-router'

export default {
  name: 'App',
  components: {
    Homepage
  },
  setup() {
     
    const router = useRouter()
    const routeTo = (path) => {
      router.push(path)
    }

    return {
      routeTo
    }
  }
}
</script>

<style>
#app {
  
}
</style>
