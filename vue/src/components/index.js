import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.component('BgBox',require('./BgBox').default);
Vue.component('SXCenterBox',require('./SXCenterBox').default);

export default Vue;