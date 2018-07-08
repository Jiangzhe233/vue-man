import VueRouter from 'vue-router';
import BaseRouters from './base-routers';
import Vue from 'vue';
import iView from 'iview';
import Util from '@/libs/util';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: BaseRouters
};

const routers = new VueRouter(RouterConfig);

const LOGIN_PATH = '/login';

routers.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    let isLogin = sessionStorage.getItem("isLogin");
    let toPath = to.path;
    if(LOGIN_PATH === toPath && isLogin){
        next('/');
    }else if(!isLogin && LOGIN_PATH !== toPath){
        next('/login');
    }else{
        next();
    }
    
});

routers.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default routers;