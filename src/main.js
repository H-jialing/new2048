// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import store from './store'
import './styles/variables.scss';
import './styles/base.scss';

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
