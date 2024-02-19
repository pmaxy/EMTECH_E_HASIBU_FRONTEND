import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../components/User/Dashboard/Dashboard.vue')
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: () => import('../components/User/Dashboard/Main/Feedback.vue')
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
      path: '/General_Expenses',
      name: 'General_Expenses',
      component: () => import('../components/User/Dashboard/Main/Expenses/General_Expenses.vue')
    }
    ,
    {
      path: '/PayTable',
      name: 'PayTable',
      component: () => import('../components/User/Dashboard/Main/Expenses/PayTable.vue')
    },
    {
      path: '/Payroll',
      name: 'Payroll',
      component: () => import('../components/User/Dashboard/Main/Expenses/Forms/Payroll.vue')
    },
    {
      path: '/general_expenses',
      name: 'general_expenses',
      component: () => import('../components/User/Dashboard/Main/Expenses/Forms/general_expenses.vue')
    },
    {
      path: '/General_Expenses',
      name: 'General_Expenses',
      component: () => import('../components/User/Dashboard/Main/Expenses/General_Expenses.vue')
    },
    {
      path: '/Dashboard_home',
      name: 'Dashboard_home',
      component: () => import('../components/User/Dashboard/Main/Dashboard_home.vue')
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
