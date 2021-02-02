import Vue from 'vue'
import App from './App.vue'
import router from './router' //path 잡아주면됨
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

//아래에다가 router추가 해주면 app을 마운트 할때 router를 쓸수 있도록 해줌
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
