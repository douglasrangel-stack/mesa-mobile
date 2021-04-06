import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";

import './assets/css/style.min.css'

Vue.config.productionTip = false

Vue.component("Loader", Loader);
Vue.component("Error", Error);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')