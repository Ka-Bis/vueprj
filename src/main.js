import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/fontawesome-vue"
import "./plugins/moment-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuejquery from 'vue-jquery';

Vue.use(vuejquery)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
