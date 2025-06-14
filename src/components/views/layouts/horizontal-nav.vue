<template>
    <v-app-bar title="Sai Portfolio" elevation="2">
      <v-spacer></v-spacer>
      <v-btn variant="text" @click="routeTo('/')">Home</v-btn>
      <v-btn variant="text" @click="routeTo('/about')">About</v-btn>
      <v-btn variant="text" @click="routeTo('/projects')">Projects</v-btn>
      <v-btn variant="text" @click="routeTo('/contact')">Contact</v-btn>
      <v-btn variant="text" @click="routeTo('/privacy-policy')">Privacy Policy</v-btn>
    </v-app-bar>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const routeTo = (path) => {
        router.push(path)
        }

        return {
            routeTo
        }
    },
}
</script>