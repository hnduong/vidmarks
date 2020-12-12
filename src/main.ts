import Vue from 'vue';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';

import awsExports from './aws-exports';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Amplify.configure(awsExports);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
