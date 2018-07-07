import VueRouter from 'vue-router';
import BaseRouters from './base-routers';
import Vue from 'vue';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: BaseRouters
};

const routers = new VueRouter(RouterConfig);

export default routers;