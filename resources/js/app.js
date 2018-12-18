import Vue, {i18n, store, router} from './vueConfig';
import App from './App.vue';
import 'es6-promise/auto';


Vue.component('login-popup', (resolve) => {
  import(/* webpackChunkName: "login-popup" */'./LoginPopup.vue')
    .then((LoginPopup) => {
      resolve(LoginPopup.default);
    });
});

export const initializeApp = (element, component) => {
  new Vue({
    el: `#${element}`,
    i18n,
    store,
    router,
    ...component,
    mounted() {
      this.$store.commit('initialize');
    }
  })
};

initializeApp('app', App);

