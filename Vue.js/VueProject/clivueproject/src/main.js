import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Importacio bootstrap
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
//J S
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')
