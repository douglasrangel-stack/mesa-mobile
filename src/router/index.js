import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/user/User.vue'
import UserProfile from '../views/user/UserProfile.vue'
import Alter from '../views/user/Alter.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/user',
        component: User,
        meta: {
            login: true
        },
        children: [{
                path: '',
                name: 'UserProfile',
                component: UserProfile,
            },
            {
                path: 'alter',
                name: 'Alter',
                component: Alter,
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login)) {
        if (!window.localStorage.token) {
            next("/login");
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router