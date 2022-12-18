import Vue from 'vue'
import HelloVuetify from './components/HelloVuetify.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(HelloVuetify)
}).$mount('#app')
