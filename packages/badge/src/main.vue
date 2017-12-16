<template>
  <div :class="badgeStyle">
    <slot></slot>
    <div>{{emptyText}}</div>
  </div>
</template>

<script>
import Locale from '@src/mixins/locale'
const prefixCls = 'cr-badge'

export default {
  name: 'CrBadge',
  mixins: [Locale],
  computed: {
    badgeStyle () {
      return `${prefixCls}`
    },
    emptyText () {
      return this.t('cr.badge.emptyText')
    }
  }
}
</script>
