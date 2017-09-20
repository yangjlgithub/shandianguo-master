import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/components/Home/Home'
import Hot from  '@/components/Home/TopJump/Hot'
import HomeDetails from '@/components/Home/HomeDetails/HomeDetails'

import Category from '@/components/Category/Category'
import CategoryDetails from '@/components/Category/CategoryDetails/CategoryDetails'

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
  		component:Home,
      children:[
        {
          path:'hot',
          component:Hot
        },
        {
          path:'homeDetails',
          component:HomeDetails
        }
      ]
  	},
  	{
  		path:'/category',
  		component:Category,
      children:[
        {
          path:'categoryDetails',
          component:CategoryDetails
        }
      ]
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
