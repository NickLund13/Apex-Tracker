import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueToasted from 'vue-toasted';

Vue.config.productionTip = false

// load toasted plugin
//he also passed the fontawesome for the iconpack
// to do that he added the argument { iconPack: 'fontawesome' }
Vue.use(VueToasted);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
