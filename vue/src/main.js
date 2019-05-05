import Vue from './components';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
