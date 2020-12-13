import Vue from 'vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import awsExports from './aws-exports';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Amplify.configure(awsExports);

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
