import Vue from 'vue'
import VueRouter from 'vue-router'
import Viewer from '../views/Viewer.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/viewer',
        name: 'viewer',
        component: Viewer
    },
    {path: '*', redirect: '/viewer'}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
