import Vue from 'vue'
import Badge from '@packages/badge'

describe('Badge.vue', () => {
  it('Badge badgeStyle value', () => {
    const Constructor = Vue.extend(Badge)
    const vm = new Constructor().$mount()
    expect(vm.$el.classList.contains('cr-badge')).to.equal(true)
  })
})
