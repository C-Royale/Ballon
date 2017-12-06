import Badge from '../packages/badge/index.js'

const components = [
  Badge
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  install,
  Badge
}
