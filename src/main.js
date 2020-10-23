import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHeart, faShoppingCart, faLock, faHotel,faShuttleVan, faAward, faPhoneVolume, faSearch, faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faWhatsappSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from '@/router'
library.add(faUser, faHeart, faShoppingCart, faLock, faHotel, faShuttleVan, faAward, faPhoneVolume, faSearch, faBars, faFacebookSquare, faWhatsappSquare, faInstagramSquare, faPlusCircle)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueRouter)
const router = new VueRouter({mode: 'history', routes});


Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
