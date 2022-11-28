import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/pages/index.vue'
import Shop from '@/views/store/index.vue'
import Login from '@/views/store/login.vue'
import Signup from '@/views/store/signup.vue'
import Product from '@/views/store/product.vue'
import Profile from '@/views/account/profile.vue'
import Plan from '@/views/account/plan.vue'
import  OrderHistory from '@/views/account/orderHistory.vue'
import ChangePassword from '@/views/account/changePassword.vue'
import Cart from '@/views/store/cart.vue'
import Checkout from '@/views/store/checkout.vue'
import AdminCustomers from '@/views/admin/customers/index.vue'
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
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    props:true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props:true,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    props:true,
  },
  {
    path: '/singleproduct',
    name: 'Product',
    component: Product,
    props:true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    props:true,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    props:true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props:true,
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan,
    props:true,
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: ChangePassword,
    props:true,
  },
  {
    path: '/orders_history',
    name: 'OrderHistory',
    component: OrderHistory,
    props:true,
  },
  {
    path: '/customer_index',
    name: 'AdminCustomers',
    component:AdminCustomers,
    props:true,
  },
 
 
  {
    path: '/customer_view',
    name: 'ViewAdminCustomers',
    component:ViewAdminCustomers,
    props:true,
  },


  // Admin produccts
{
  path:'/admin_products',
  name:'AdminProduct',
  component:AdminProduct,
  props:true,
},
{
  path:'/admin_orders',
  name:'AdminOrders',
  component:AdminOrders,
  props:true,
},
{
  path:'/admin_products_category',
  name:'AdminProductCategory',
  component:AdminProductCategory,
  props:true,
},
{
  path:'/create_product',
  name:'AdminCreateProduct',
  component:AdminCreateProduct,
  props:true,
},
{
  path:'/create_product_category',
  name:'AdminCreateProductCategory',
  component:AdminCreateProductCategory,
  props:true,
},
{
  path:'/edit_product',
  name:'AdminEditProduct',
  component:AdminEditProduct,
  props:true,
},
{
  path:'/edit_product_category',
  name:'AdminEditProductCategory',
  component:AdminEditProductCategory,
  props:true,
},
{
  path:'/view_order',
  name:'AdminViewOrders',
  component:AdminViewOrders,
  props:true,
},


  // store routes
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
