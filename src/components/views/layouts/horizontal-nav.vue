<template>
  <v-app-bar color="background" elevation="0" border="b">
    <v-container class="d-flex align-center" style="max-width: 1100px; padding: 0 24px;">
      <router-link to="/" class="nav-logo">
        Sairil Seberiaga
      </router-link>

      <v-spacer></v-spacer>

      <nav class="d-flex align-center ga-1">
        <router-link
          v-for="link in links"
          :key="link.title"
          :to="link.path"
          class="nav-link"
          :class="{ 'nav-link--active': $route.path === link.path }"
        >
          {{ link.title }}
        </router-link>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const links = [
      { title: 'Home',           path: '/' },
      { title: 'About',          path: '/about' },
      { title: 'Projects',       path: '/projects' },
      { title: 'Contact',        path: '/contact' },
      { title: 'Privacy Policy', path: '/privacy-policy' },
    ]

    return { links, route }
  }
}
</script>

<style scoped>
.nav-logo {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1E1E1E;
  letter-spacing: -0.3px;
  text-decoration: none;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #555555;
  text-decoration: none;
  padding: 4px 12px;
  border-radius: 4px;
  transition: color 300ms ease-in-out;
}

.nav-link:hover {
  color: #1677be;
  text-decoration: none;
}

.nav-link--active {
  color: #1677be;
  font-weight: 600;
}
</style>
