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
      path: '/Login',
      name: 'Login',
      component: () => import('../components/User/Authentication/Verification.vue')
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
      component: () => import('../components/User/Dashboard/Main/Dashboard/Dashboard_home.vue')
    },

    {
      path: '/Accounts',
      name: 'Accounts',
      component: () => import('../components/User/Dashboard/Main/Accounts.vue')
    }
    ,
    {
      path: '/Purchase_Order',
      name: 'Purchase_Order',
      component: () => import('../components/User/Dashboard/Main/Purchases/Purchase_Order.vue')
    },
    {
      path: '/Vendor_Details',
      name: 'Vendor_Details',
      component: () => import('../components/User/Dashboard/Main/Purchases/Vendor_Details.vue')
    },
    {
      path: '/Purchase_Bill',
      name: 'Purchase_Bill',
      component: () => import('../components/User/Dashboard/Main/Purchases/Purchase_Bill.vue')
    },
    {
      path: '/New_Bill',
      name: 'New_Bill',
      component: () => import('../components/User/Dashboard/Main/Purchases/Forms/New_Bill.vue')
    },
    {
      path: '/Paid_Bill' ,
      name: 'Paid_Bill',
      component: () => import('../components/User/Dashboard/Main/Purchases/Forms/Paid_Bill.vue')
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../components/User/Dashboard/Main/Dashboard/Profile.vue')
    },

    {
      path: '/MapComponent',
      name: 'MapComponent',
      component: () => import('../components/User/Dashboard/Main/Dashboard/MapComponent.vue')
    },


  ]
})

export default router
