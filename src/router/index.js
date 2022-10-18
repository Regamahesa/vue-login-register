
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Home from "../View/Home.vue"
import About from "../View/About.vue"
import Contact from "../View/Contact.vue"
import Product from "../View/Product.vue"
import Detail from "../View/Detail.vue"
import Vue from "vue";
import Router from "vue-router";


Vue.use(Router)
const routes = [ 
    {
        path: "/",
        name: "LoginPage",
        component: Login,   
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: Register,   
    },
    {
        path: "/home",
        name: "HomePage",
        component: Home,   
    },
    {
        path: "/about",
        name: "AboutPage",
        component: About,   
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: Contact,   
    },
    {
        path: "/product",
        name: "ProductPage",
        component: Product,   
    },
    {
        path: "/detail",
        name: "DetailPage",
        component: Detail,   
    },
]

const router = new Router({
    routes,
    mode: "history",
})
export default router;