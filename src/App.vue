

<template>
  <v-app>
    <v-app-bar title="Sai Portfolio" elevation="2">
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Projects</v-btn>
      <v-btn text>Contact</v-btn>
    </v-app-bar>
    <homepage></homepage>
  </v-app>
 
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
#app {
  
}
</style>
