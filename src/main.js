import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 960,
    lg: Infinity,
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
