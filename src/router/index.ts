import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import PeoplePage from '@/pages/PeoplePage.vue';
import PeopleProfilePage from '@/pages/PeopleProfilePage.vue';
import FavoritesPage from '@/pages/FavoritesPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/people',
      name: 'people',
      component: PeoplePage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
    {
      path: '/people/:id',
      name: 'people_profile',
      component: PeopleProfilePage
    }
  ]
});

export default router;
