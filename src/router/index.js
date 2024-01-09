import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresGDPR: true, // GDPR acceptance required for this route
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresGDPR: true, // GDPR acceptance required for this route
      },
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: {
        requiresGDPR: true, // GDPR acceptance required for this route
      },
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresGDPR: true, // GDPR acceptance required for this route
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top of the page
    return { top: 0 };
  }
})

router.beforeEach((to, from, next) => {
  const isGDPRAccepted = document.cookie.includes("gdpr_accepted=true");

  // If the GDPR is not accepted, redirect to "/"
  if (!isGDPRAccepted) {
    // Prevent an infinite loop if the user is already on the home page
    if (to.path !== '/') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
