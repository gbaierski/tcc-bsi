import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { app } from "./firebase";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import './assets/css/main.scss'

const vueApp = createApp(App)

vueApp.use(createPinia())
vueApp.use(router)

vueApp.component('font-awesome-icon', FontAwesomeIcon)

vueApp.mount('#app')