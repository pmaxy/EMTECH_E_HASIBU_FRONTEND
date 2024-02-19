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
   
        {path: '/Quotation',
         name: 'Quotation',
         component: () => import('../components/User/Dashboard/Main/sales/Quotation.vue'),
        }
    
    ,
    {
      path: '/Quotation_form',
      name: 'Quotation_form',
      component: () => import('../components/User/Dashboard/Main/sales/forms/Quotation_form.vue')
    },
    {
      path: '/Customer_info_form',
      name: 'Customer_info_form',
      component: () => import('../components/User/Dashboard/Main/sales/forms/Customer_info_form.vue')
    },

    {path: '/Invoice',
    name: 'Invoice',
    component: () => import('../components/User/Dashboard/Main/sales/Invoice.vue'),
   }
   ,
    {path: '/Customer Information',
    name: 'Customer Information',
    component: () => import('../components/User/Dashboard/Main/sales/Customer Information.vue'),
   }
  ,
   {path: '/Payment Details',
    name: 'Payment Details',
    component: () => import('../components/User/Dashboard/Main/sales/Payment Details.vue'),
   }
   ,
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
    },

   

  ]
})

export default router
