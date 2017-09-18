import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/components/Home/Home'
import Category from '@/components/Category/Category'
import Order from '@/components/Order/Order'
import Profile from '@/components/Profile/Profile'
export default new Router({
  routes: [
  	{
  		path:'/',
  		component:Home
  	},
  	{
  		path:'/home',
  		component:Home
  	},
  	{
  		path:'/category',
  		component:Category
  	},
  	{
  		path:'/order',
  		component:Order
  	},
  	{
  		path:'/profile',
  		component:Profile
  	}
  ]
})