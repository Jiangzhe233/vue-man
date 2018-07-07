import Vue from 'vue';
import iView from 'iview';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import routers from './routers';
import 'iview/dist/styles/iview.css';

Vue.use(Vuex);

Vue.use(iView);

routers.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

routers.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    router: routers,
    store: store,
    render: h => h(App)
});