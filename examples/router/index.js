import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = [{
  path: '/',
  component: () => import('../pages/index.vue')
}]

Object.keys(navConf).forEach((item) => {
  routes = routes.concat(navConf[item])
})

let addRoutes = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addRoutes(route.items)
      routes = routes.concat(route.items)
    } else if (route.name) {
      route.component = () => import(`../docs/${route.name}.md`)
    }
  })
}
addRoutes(routes)

routes.push({
  path: '*',
  redirect: '/'
})

export default new Router({
  routes: routes
})
