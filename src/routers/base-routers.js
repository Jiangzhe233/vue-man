const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['@/views/index'], resolve)
}, {
    path: '/404',
    meta: {
        title: '找不到页面'
    },
    component: (resolve) => require(['@/views/base/404'], resolve)
}, {
    path: '*',
    meta: {
        title: '找不到页面'
    },
    component: (resolve) => require(['@/views/base/404'], resolve)
}
];
export default routers;