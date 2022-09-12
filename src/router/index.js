//*********************** Final Learning Phase ********************
import { createRouter, createWebHistory } from "vue-router";
import VueHome from "../views/VueHome.vue";
import UserList from "../components/UserList.vue";
import UserDetails from "../components/UserDetails.vue";

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
        path: "/users/:userId",
        name: "UserDetails",
        component: UserDetails,
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

//*********************** Learning Phase 19  ********************
// import { createRouter, createWebHistory } from "vue-router";
// import VueHome from "../views/VueHome.vue";
// import UserList from "../components/UserList.vue";
// import UserDetails from "../components/UserDetails.vue";

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: VueHome,
//     },
//     {
//         path: "/users",
//         name: "UserList",
//         component: UserList,
//     },
//     {
//         path: "/users/:userId",
//         name: "UserDetails",
//         component: UserDetails,
//     },
//     {
//         path: "/about",
//         name: "About",

//         component: () => 
//         import("../views/VueAbout.vue")
//     },
// ];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// })

// export default router;

//*********************** Learning Phase 18 ********************
// import { createRouter, createWebHistory } from "vue-router";
// import VueHome from "../views/VueHome.vue";
// import UserList from "../components/UserList.vue";

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: VueHome,
//     },
//     {
//         path: "/users",
//         name: "UserList",
//         component: UserList,
//     },
//     {
//         path: "/about",
//         name: "Adbout",

//         component: () => 
//         import("../views/VueAbout.vue")
//     },
// ];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// })

// export default router;