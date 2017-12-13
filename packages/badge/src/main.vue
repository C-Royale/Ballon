<template>
  <div :class="badgeStyle">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'cr-badge'

export default {
  name: 'CrBadge',
  computed: {
    badgeStyle () {
      return `${prefixCls}`
    }
  }
}
</script>
