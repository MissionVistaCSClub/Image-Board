import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Catalog from './components/Catalog.vue'
import Thread from './components/Thread.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/:board/catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/:board/thread/:thread',
            name: 'Thread',
            component: Thread
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})