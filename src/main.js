/* eslint-disable no-alert */
import Vue from 'vue';
import App from './App.vue';

import { data, data2 } from './data';
import say from './outer';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

say(data);
say(data2);
