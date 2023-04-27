import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(VueSweetalert2)
  .mount('#app')

