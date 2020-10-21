import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import './assets/themestyle/theme/index.css';
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
