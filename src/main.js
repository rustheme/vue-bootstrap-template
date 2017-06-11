import Vue from 'vue'
import App from './App'
import router from './router'
import './scss/main.scss'

import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import VueForm from 'vue-form'
import './chartjs.conf'
import 'hchs-vue-charts'

// Check is production environment enabled
// Used for enabling analytics page tracking
function isProdEnv () {
  if (process.env.NODE_ENV === 'production') {
    return true
  } else {
    return false
  }
}

Vue.use(BootstrapVue)
Vue.use(window.VueCharts)
Vue.use(VueForm)
Vue.use(VueAnalytics, {
  // Replace with your Google Anaytics Tracking ID
  id: 'UA-62526832-7',
  router,
  autoTracking: {
    page: isProdEnv()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
