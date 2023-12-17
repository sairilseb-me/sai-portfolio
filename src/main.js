import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './router/index.js'



createApp(App).use(router).use(vuetify).mount('#app')


