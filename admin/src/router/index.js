import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ltemsEdit from '../views/ltemsEdit.vue'
import ltemsList from '../views/ltemsList .vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'main',
    component: Main,
    children: [{
      path: '/categories/create/',
      component: CategoryEdit
    }, {
      path: '/categories/list/',
      component: CategoryList
    }, {
      path: '/categories/edit/:id',
      component: CategoryEdit,
      props: true
    }, {
      path: '/items/create/',
      component: ltemsEdit
    }, {
      path: '/items/list/',
      component: ltemsList
    }, {
      path: '/items/edit/:id',
      component: ltemsEdit,
      props: true
    }]
  },

]

const router = new VueRouter({
  routes
})

export default router