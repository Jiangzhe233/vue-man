import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


import vuex from '@/vuex';
import App from '@/app.vue';
import routers from '@/routers';

Vue.use(iView);

new Vue({
    el: '#app',
    router: routers,
    store: vuex,
    render: h => h(App)
});