import Vue from 'vue';
import App from './App.vue';
import Router from './router';

Vue.config.productionTip = false;

//Fix for anchor links not working by default
const fixIdScrolling = {
  watch: {
      $route(_to:any, _from:any) {
          // @ts-ignore
          const currentRoute = this.$router.currentRoute;
          const idToScrollTo = currentRoute.hash;
          // @ts-ignore
          this.$nextTick(() => {
              if (idToScrollTo && document.querySelector(idToScrollTo)) {
                  document.querySelector(idToScrollTo).scrollIntoView();
              }
          });
      },
  },
};

new Vue({
  mixins: [fixIdScrolling],
  router: Router,
  render: (h) => h(App),
}).$mount('#app');
