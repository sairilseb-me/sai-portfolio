<template>
  <v-app>
    <!-- <v-app-bar title="Sai Portfolio" elevation="2">
      <v-spacer></v-spacer>
      <v-btn text @click="routeTo('/')">Home</v-btn>
      <v-btn text @click="routeTo('/about')">About</v-btn>
      <v-btn text @click="routeTo('/projects')">Projects</v-btn>
      <v-btn text @click="routeTo('/contact')">Contact</v-btn>
    </v-app-bar> -->
    <component :is="resolveDisplay"></component>
    <v-main class="mt-3">
    <router-view></router-view>
   </v-main>
  </v-app>

</template>

<script>
import HorizontalNav from '../src/components/views/layouts/horizontal-nav.vue'
import VerticalNav from '../src/components/views/layouts/vertical-nav.vue'
import Homepage from './components/views/Homepage.vue'
import {useRouter} from 'vue-router'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    Homepage,
    HorizontalNav,
    VerticalNav,
  },
  setup() {
     
    const {mdAndUp} = useDisplay()
    const router = useRouter()
    const routeTo = (path) => {
      router.push(path)
    }

    const resolveDisplay = computed(() => {
      if (mdAndUp.value) {
        return 'horizontal-nav'
      } else {
        return 'vertical-nav'
      }
    })

    return {
      routeTo,

      resolveDisplay,
    }
  }
}
</script>

<style>
#app {
  
}
</style>
