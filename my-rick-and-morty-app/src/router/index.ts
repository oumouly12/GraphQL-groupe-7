import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetail from '../views/CharacterDetail.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: CharacterList },
    { path: '/character/:id', component: CharacterDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
