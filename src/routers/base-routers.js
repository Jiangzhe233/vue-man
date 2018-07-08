let routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['@/views/index'], resolve)
}, {
    path: '/login',
    hidden: true,
    meta: {
        title: '用户登录'
    },
    component: (resolve) => require(['@/views/login/login'], resolve)
}
// ,
// {
//     path: '*',
//     meta: {
//         title: '找不到页面'
//     },
//     hidden: true,
//     component: (resolve) => require(['@/views/error-pages/404'], resolve)
// }
];
export default routers;