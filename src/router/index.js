import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    //Lazy Loading Component
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/jobs',
    name:'Jobs',
    component:Jobs
  },
  {
    path:'/jobs/JobDetails/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
  },

  //Redirect
  {
    path:'/job-alls',
    redirect:'/jobs'
  },

  //404 Page catchAll
  {
    path:'/:catchAll(.*)',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
