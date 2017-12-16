import Badge from '../packages/badge/index.js'
import locale from './locale/index'

const components = [
  Badge
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  version: '0.0.8',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Badge
}
