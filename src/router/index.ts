import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import Alitternation from '@/views/alitternation.vue';
import Anemu from '@/views/anemu.vue';
import Elipse from '@/views/elipse.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/alitternation',
            name: 'alitternation',
            component: Alitternation,
        },
        {
            path: '/anemu',
            name: 'anemu',
            component: Anemu,
        },
        {
            path: '/elipse',
            name: 'elipse',
            component: Elipse,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0,
        };
    },
    mode: "hash",
});
