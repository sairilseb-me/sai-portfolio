<template>
  <v-app-bar color="background" elevation="0" border="b">
    <router-link to="/" class="nav-logo-mobile ml-4">
      Sairil Seberiaga
    </router-link>

    <v-spacer></v-spacer>

    <v-menu transition="slide-y-transition">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          variant="text"
          color="secondary"
          class="mr-2"
          aria-label="Open navigation menu"
        >
          <v-icon>
            <svg-icon type="mdi" :path="icons.menu"></svg-icon>
          </v-icon>
        </v-btn>
      </template>

      <v-list class="nav-mobile-list" elevation="1" min-width="200">
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.path"
          :class="{ 'active-item': $route.path === link.path }"
        >
          <v-list-item-title class="nav-mobile-item-title">
            {{ link.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { useRoute } from 'vue-router'
import { mdilMenu } from '@mdi/light-js'

export default {
  components: { SvgIcon },
  setup() {
    const route = useRoute()

    const links = [
      { title: 'Home',           path: '/' },
      { title: 'About',          path: '/about' },
      { title: 'Projects',       path: '/projects' },
      { title: 'Contact',        path: '/contact' },
      { title: 'Privacy Policy', path: '/privacy-policy' },
    ]

    return { links, route, icons: { menu: mdilMenu } }
  }
}
</script>

<style scoped>
.nav-logo-mobile {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1E1E1E;
  text-decoration: none;
}

.nav-mobile-list {
  border: 1px solid #e3e3e3;
  border-radius: 5px;
}

.nav-mobile-item-title {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}

.active-item .nav-mobile-item-title {
  color: #1677be;
  font-weight: 600;
}
</style>
