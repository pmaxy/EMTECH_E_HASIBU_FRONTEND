import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../components/User/Dashboard/Dashboard.vue')
    
    },

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../components/User/Authentication/login.vue')
    // },
    // {
    //   path: '/PasswordReset',
    //   name: 'PasswordReset',
    //   component: () => import('../components/User/Authentication/PasswordReset.vue')
    // },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: () => import('../components/User/Dashboard/Main/Feedback.vue')
    },

    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../components/User/Dashboard/Main/Dashboard/Profile.vue')
    },

    {
      path: '/Budget',
      name: 'Budget',
      component: () => import('../components/User/Dashboard/Main/Budget.vue')
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: () => import('../components/User/Dashboard/Main/Settings.vue')
    },
    {
      path: '/Sales',
      name: 'Sales',
      component: () => import('../components/User/Dashboard/Main/Sales.vue')
    },

    {
      path: '/Returns',
      name: 'Returns',
      component: () => import('../components/User/Dashboard/Main/Returns.vue')
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: () => import('../components/User/Dashboard/Main/Reports.vue')
    },
    {
      path: '/Inventory',
      name: 'Inventory',
      component: () => import('../components/User/Dashboard/Main/Inventory.vue')
    },

    {
      path: '/Expenses',
      name: 'Expenses',
      component: () => import('../components/User/Dashboard/Main/Expenses.vue')
    }
    ,
    {
      path: '/Dashboard_home',
      name: 'Dashboard_home',
      component: () => import('../components/User/Dashboard/Main/Dashboard/Dashboard_home.vue')
    },

    {
      path: '/Accounts',
      name: 'Accounts',
      component: () => import('../components/User/Dashboard/Main/Accounts.vue')
    }
    ,
    {
      path: '/Purchases',
      name: 'Purchases',
      component: () => import('../components/User/Dashboard/Main/Purchases.vue')
    }
  ]
})

export default router
