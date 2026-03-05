<template>
  <v-app>
    <component :is="resolveDisplay"></component>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HorizontalNav from '../src/components/views/layouts/horizontal-nav.vue'
import VerticalNav from '../src/components/views/layouts/vertical-nav.vue'
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    HorizontalNav,
    VerticalNav,
  },
  setup() {
    const { mdAndUp } = useDisplay()

    const resolveDisplay = computed(() =>
      mdAndUp.value ? 'horizontal-nav' : 'vertical-nav'
    )

    return { resolveDisplay }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
