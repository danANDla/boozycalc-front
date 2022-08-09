import HomePage from "@/views/HomePage";
import {createRouter, createWebHistory } from "vue-router";

const routes = [
        {path: '/',  component: HomePage}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;