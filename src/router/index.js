//*********************** Learning Phase 18 ********************
import { createRouter, createWebHistory } from "vue-router";
import VueHome from "../views/VueHome.vue";
import UserList from "../components/UserList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: VueHome,
    },
    {
        path: "/users",
        name: "UserList",
        component: UserList,
    },
    {
        path: "/about",
        name: "About",

        component: () => 
        import("../views/VueAbout.vue")
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;