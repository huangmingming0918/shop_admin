// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1 导入路由
import Router from 'vue-router'

// 导入创建好的两个单文件组件
import Login from './components/login/Login'
import Home from './components/home/Home'

// 将路由通过use注册到Vue中
// 注意：不要忘了这一步
Vue.use(Router)

// 2 创建路由实例，配置路由规则
const router = new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  // 3 将 路由实例 与 Vue 实例关联到一起
  router
})
