import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ltemEdit from '../views/ltemEdit.vue'
import ltemList from '../views/ltemList .vue'

import Login from '../views/Login.vue'


import HerosEdit from '../views/HerosEdit.vue'
import HerosList from '../views/HerosList.vue'


import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'


import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
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
          component: ltemEdit
        }, {
          path: '/items/list/',
          component: ltemList
        }, {
          path: '/items/edit/:id',
          component: ltemEdit,
          props: true
        }, {
          path: '/heros/create/',
          component: HerosEdit
        }, {
          path: '/heros/list/',
          component: HerosList
        }, {
          path: '/heros/edit/:id',
          component: HerosEdit,
          props: true
        },
        {
          path: '/articles/create/',
          component: ArticleEdit
        }, {
          path: '/articles/list/',
          component: ArticleList
        }, {
          path: '/articles/edit/:id',
          component: ArticleEdit,
          props: true
        },
        {
          path: '/abs/create/',
          component: AdEdit
        }, {
          path: '/abs/list/',
          component: AdList
        }, {
          path: '/abs/edit/:id',
          component: AdEdit,
          props: true
        },
        {
          path: '/admin_users/create/',
          component: AdminUserEdit
        }, {
          path: '/admin_users/list/',
          component: AdminUserList
        }, {
          path: '/admin_users/edit/:id',
          component: AdminUserEdit,
          props: true
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    // return next('/login')
    console.log('1qq');

  }

  next()
})

export default router