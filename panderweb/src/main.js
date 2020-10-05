import { createApp } from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/theme/index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementUI)
  .mount('#app');
