import LoginScreenComponent from "../views/loginscreen.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: {
            name: "loginscreen"
        }
    },
    {
        path: "/loginscreen",
        name: "loginscreen",
        component: LoginScreenComponent
    },
    {
        path: "/secure-gallery",
        name: "secure-gallery",
        component: () => import('../views/secure-gallery.vue')
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router