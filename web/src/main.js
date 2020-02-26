import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'

import 'swiper/dist/css/swiper.css'
import './style.scss'

import Card from './components/Card.vue'
Vue.component('m-card', Card)


import ListCard from './components/ListCard.vue'
Vue.component('m-list', ListCard)


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')