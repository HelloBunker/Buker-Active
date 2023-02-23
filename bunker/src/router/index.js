import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '@/views/pages/index.vue'
import Contact from '@/views/pages/contact.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import ShopLayout from '@/components/layouts/shop/ShopLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import AdminLayout from '@/components/layouts/admin/AdminLayout.vue'
import Shop from '@/views/store/index.vue'
import Login from '@/views/store/login.vue'
import  AdminLogin from '@/views/admin/auth/Login.vue'
import Signup from '@/views/store/signup.vue'
import Product from '@/views/store/product.vue'
import Profile from '@/views/account/profile.vue'
import Plan from '@/views/account/plan.vue'
import OrderHistory from '@/views/account/orderHistory.vue'
import ChangePassword from '@/views/account/changePassword.vue'
import Cart from '@/views/store/cart.vue'
import Checkout from '@/views/store/checkout.vue'
import AdminCustomers from '@/views/admin/customers/index.vue'
import AdminDashboard from '@/views/admin/Dashboard.vue'
// import AddAdminCustomers from '@/views/admin/customers/create.vue'
import ViewAdminCustomers from '@/views/admin/customers/view.vue'
// import EditAdminCustomers from '@/views/admin/customers/edit.vue'
import AdminProduct from '@/views/admin/products/index.vue'
import AdminProductCategory from '@/views/admin/products/category/index.vue'
import AdminOrders from '@/views/admin/orders/index.vue'
import AdminCreateProduct from '@/views/admin/products/create.vue'
import AdminCreateProductCategory from '@/views/admin/products/category/create.vue'
// import AdminCreateOrders from '@/views/admin/products/orders/create.vue'
import AdminEditProduct from '@/views/admin/products/edit.vue'
import AdminEditProductCategory from '@/views/admin/products/category/edit.vue'
import AdminViewOrders from '@/views/admin/orders/view.vue'
// import Footer from '@/components/layouts/Footer.vue'
import store from '@/store'
const routes = [

  // Shop Default Routes
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
     

    ]
  },
   
      {
        path: '/shop',
        name: 'Shop',
        component: ShopLayout,
        children: [
        
       {
        path: '/contact',
        name: 'Contact',
        component:Contact
      },
      {
        path: '/shop',
        name: 'Shop',
        component: Shop
        
      },
      {
        path: '/singleproduct/:id',
        name: 'Product',
        component: Product,
        props:true,
      },

      
      {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta:{requiresAuth: true},
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
        meta:{requiresAuth: true},
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta:{requiresAuth: true},
      },
      {
        path: '/plan',
        name: 'Plan',
        component: Plan
      },
      {
        path: '/changePassword',
        name: 'ChangePassword',
        component: ChangePassword
      },
      {
        path: '/orders_history',
        name: 'OrderHistory',
        component: OrderHistory,
        meta:{requiresAuth: true},

      },
     

    ]
  },

  


// Auth Routes
{
path:'/auth',
redirect: '/login',
name:'Auth',
component:AuthLayout,
children: [
  {



    path: '/login',
    name: 'Login',
    component: Login,

  },
 
  {



    path: '/admin_login',
    name: 'AdminLogin',
    component:AdminLogin,

  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,

  },

  // {
  //       path: '/changePassword',
  //       name: 'ChangePassword',
  //       component: ChangePassword
  //     },
],

  
},

  // Admin produccts
  {
    path:'/admin',
    redirect: '/admin_dashboard',
    name:'AdminLayout',
    component:AdminLayout,
    children: [
  
  
  {
    path: '/admin_dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,

  },
  {
    path: '/admin_products',
    name: 'AdminProduct',
    component: AdminProduct,

  },
  {
    path: '/admin_orders',
    name: 'AdminOrders',
    component: AdminOrders,

  },
  {
    path: '/customer_index',
    name: 'AdminCustomers',
    component: AdminCustomers,
   
  },
  {
    path: '/admin/customer/:id',
    name: 'ViewAdminCustomers',
    component: ViewAdminCustomers,
    props:true
  },

  {
    path: '/admin_products_category',
    name: 'AdminProductCategory',
    component: AdminProductCategory,

  },
  {
    path: '/create_product',
    name: 'AdminCreateProduct',
    component: AdminCreateProduct,

  },
  {
    path: '/create_product_category',
    name: 'AdminCreateProductCategory',
    component: AdminCreateProductCategory,

  },
  {
    path: '/edit_product/:id',
    name: 'AdminEditProduct',
    component: AdminEditProduct,
    props:true,

  },
  {
    path: '/edit_product_category/:id',
    name: 'AdminEditProductCategory',
    component: AdminEditProductCategory,
    props: true,

  },
  {
    path: '/view_order',
    name: 'AdminViewOrders',
    component: AdminViewOrders,

  },

  
  // store routes

]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !store.state.auth.user ){
    next({name: 'Login'})
  }else if(store.state.auth.user && (to.name === "AuthLayout") ){
    next({name:'Home'})
  }
   else{
next();
  }
})
export default router