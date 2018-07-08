<template>
    <div>
        首页
    </div>
</template>
<script>
import MenuUtil from '@/libs/menuUtil'
export default {
    data() {
        return {routers: new Array()}
    },
    mounted() {
        MenuUtil(this.routers, [
            {path: 'home', component: 'home'}
        ]);
        let fmRouter = {
            path: '/home',
            component (resolve) {
                require(['@/views/home.vue'], resolve)
            },
            hidden: false,
        };
        this.routers.push(fmRouter)
        console.log(fmRouter)
        this.$router.addRoutes(this.routers, {override: true})
        console.log(this.$router.options)
        this.$router.push('/home')
    }
};
</script>