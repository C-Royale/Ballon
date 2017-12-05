import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((item) => {
  routes = routes.concat(navConf[item])
})

let addRoutes = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addRoutes(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
addRoutes(routes)

export default new Router({
  routes: routes
})
