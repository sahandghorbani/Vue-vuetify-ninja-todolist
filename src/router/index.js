import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import Team from "../views/Team.vue";
import Projects from  '../views/Projects.vue'
import client from  '../components/client.vue' ;
import reward from  '../components/reward.vue' ;
import transactions from  '../components/transactions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },                                                                                                                            

  {
    path : '/team' ,
    name : 'team' ,
    component: Team
  },
  {
    path: '/projects' ,
    name: 'projects' ,
    component: Projects ,
    children:[
              {path:'client' , component: client , name:'client'} ,
              {path:'reward' , component: reward , name: 'reward'} ,
              {path:'transactions' , component: transactions ,name:'transactions'}
    ]
  },
]

const router = new VueRouter({
  routes ,
  mode: 'history' ,
})

export default router
