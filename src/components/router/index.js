import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/components/views/PageHome";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/PageHome', 
        },
        {
            path: '/PageHome',
            name: 'PageHome',
            component: PageHome, // redirect로 초기 진입 페이지 설정
        },
        {
            path: '/DataBinding',
            name: 'DataBinding',
            component: () => import('@/components/views/DataBinding'),
        },
        {
            path: '/component',
            component: () => import('@/components/views/ParentComponent')
        }
    ]
})